const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const cache = new Map();
const load = file => {
  const resolved = path.resolve(file); if (cache.has(resolved)) return cache.get(resolved);
  const exports = {}; cache.set(resolved, exports);
  const localRequire = name => name.startsWith('.') ? load(path.resolve(path.dirname(resolved), name + '.ts')) : require(name);
  new Function('exports', 'require', ts.transpileModule(fs.readFileSync(resolved, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(exports, localRequire);
  return exports;
};

const { generatePassword, passwordAlphabet, passwordSearchSpace, PASSWORD_CHARACTER_TYPES, PASSWORD_SIMILAR } = load('src/app/core/password-generator.ts');
const settings=(extra={})=>({length:24,types:['lowercase','uppercase','numbers','symbols'],excludeSimilar:false,...extra});
function mockCrypto(t,fill){const descriptor=Object.getOwnPropertyDescriptor(globalThis,'crypto');Object.defineProperty(globalThis,'crypto',{configurable:true,value:fill?{getRandomValues:fill}:undefined});t.after(()=>Object.defineProperty(globalThis,'crypto',descriptor));}

test('all nonempty type combinations satisfy exact length, membership and group coverage',()=>{
  for(let mask=1;mask<16;mask++)for(const length of [4,16,24,128])for(const excludeSimilar of [false,true]){
    const config=settings({length,excludeSimilar,types:PASSWORD_CHARACTER_TYPES.filter((_,i)=>mask&(1<<i)).map(type=>type.id)}),groups=passwordAlphabet(config),value=generatePassword(config);
    assert.equal(value.length,length);assert([...value].every(c=>groups.join('').includes(c)));assert(groups.every(g=>[...value].some(c=>g.includes(c))));if(excludeSimilar)assert([...value].every(c=>!PASSWORD_SIMILAR.includes(c)));
  }
});
test('unbiased sampling rejects the extra high-byte range instead of applying modulo to it',t=>{
  let calls=0;mockCrypto(t,bytes=>{calls++;bytes.fill(250);bytes.set([0,1,2,3]);return bytes;});const value=generatePassword(settings({length:8,types:['numbers']}));assert.equal(value,'01230123');assert.equal(calls,2);
});
test('coverage rejection retries a full candidate rather than fixing positions nonuniformly',t=>{
  mockCrypto(t,bytes=>{bytes.fill(0);bytes.set([0,0,0,0,0,26,52,62]);return bytes;});const value=generatePassword(settings({length:4}));assert.equal(value[0],'a');assert.equal(value[1],'A');assert.equal(value[2],'0');assert.equal(value[3],'!');
});
test('there is no Math.random fallback and secure randomness must be present',t=>{
  mockCrypto(t,null);assert.throws(()=>generatePassword(settings()),/Secure browser randomness is unavailable/);const file=fs.readFileSync('src/app/core/password-generator.ts','utf8');assert(!file.includes('Math.random'));
});
test('stalled random sources terminate with an error instead of emitting a weak partial result',t=>{
  mockCrypto(t,bytes=>{bytes.fill(255);return bytes;});assert.throws(()=>generatePassword(settings({types:['numbers']})),/could not complete/);
});
test('stalled group coverage fails closed and buffers are cleared on return',t=>{
  let buffer;mockCrypto(t,bytes=>{buffer=bytes;bytes.fill(0);return bytes;});assert.throws(()=>generatePassword(settings()),/could not meet/);assert(buffer.every(byte=>byte===0));
});
test('invalid lengths, empty selection and unsupported settings are rejected',()=>{
  for(const length of [0,3,129,16.5,NaN,Infinity])assert.throws(()=>generatePassword(settings({length})),/whole password length/);
  assert.throws(()=>generatePassword(settings({types:[]})),/at least one/);assert.throws(()=>generatePassword(settings({types:['emoji']})),/supported/);assert.throws(()=>generatePassword(settings({excludeSimilar:'yes'})),/supported/);
});
test('single-type entropy equals log2(alphabet^length) and duplicates do not alter the pool',()=>{
  const numeric=settings({length:4,types:['numbers']});assert(Math.abs(passwordSearchSpace(numeric).bits-Math.log2(10000))<1e-9);
  assert.deepEqual(passwordAlphabet(settings({types:['numbers','numbers']})),['0123456789']);assert.equal(passwordSearchSpace(settings({types:['numbers','numbers']})).groupCount,1);
});
test('coverage-constrained entropy agrees with an independent exact BigInt enumeration formula',()=>{
  const groups=passwordAlphabet(settings()),sizes=groups.map(g=>BigInt(g.length)),size=sizes.reduce((a,b)=>a+b,0n);let count=0n;
  for(let mask=0;mask<16;mask++){let remaining=size,parity=0;for(let i=0;i<4;i++)if(mask&(1<<i)){remaining-=sizes[i];parity++;}count+=(parity%2?-1n:1n)*remaining**4n;}
  assert(Math.abs(passwordSearchSpace(settings({length:4})).bits-Math.log2(Number(count)))<1e-9);
  for(const length of [4,8,16,24,64,128])assert(Number.isFinite(passwordSearchSpace(settings({length})).bits));
});
test('the displayed estimate reflects exclusions and length, without pretending to be a crack-time guarantee',()=>{
  const normal=passwordSearchSpace(settings()),excluded=passwordSearchSpace(settings({excludeSimilar:true})),short=passwordSearchSpace(settings({length:4}));assert(excluded.bits<normal.bits);assert(excluded.alphabetSize<normal.alphabetSize);assert.equal(short.level,'limited');assert.equal(normal.level,'very-strong');assert(normal.percent<=100);assert(!normal.label.includes('unbreakable'));
});


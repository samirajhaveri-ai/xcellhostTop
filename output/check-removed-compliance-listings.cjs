const fs=require('fs'),vm=require('vm');
function idx(s){const start=s.indexOf('var IDX=')+8;let quoted=false,escaped=false,depth=0;for(let i=start;i<s.length;i++){const c=s[i];if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;}else if(c==='"')quoted=true;else if(c==='[')depth++;else if(c===']'&&--depth===0)return vm.runInNewContext(s.slice(start,i+1));}throw Error('IDX missing');}
const a=idx(fs.readFileSync(0,'utf8')),b=idx(fs.readFileSync('public/imported-cloud-marketplace.html','utf8'));
const expected=a.filter(r=>!['sama-compliance','nesa-compliance'].includes(r[0]));
if(JSON.stringify(expected.map(r=>r[0]))!==JSON.stringify(b.map(r=>r[0])))throw Error('Unexpected listing changes');
console.log(a.length+' -> '+b.length+': only two requested listings removed');

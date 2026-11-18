const {execFile}=require('node:child_process');const path=require('node:path');let active=0;
module.exports=async function ipv6DevProxy(req,res){
  const reply=(status,data)=>{res.statusCode=status;res.setHeader('Content-Type','application/json');res.setHeader('Cache-Control','no-store');res.end(JSON.stringify(data));};
  if(req.method!=='POST'){reply(405,{error:'Submit a POST request.'});return '/api/tools/ipv6';}
  if(active>=2){reply(429,{error:'IPv6 checks are busy. Try again shortly.'});return '/api/tools/ipv6';}
  let length=0,chunks=[];try{for await(const chunk of req){length+=chunk.length;if(length>4096)throw Error();chunks.push(chunk);}}catch{reply(413,{error:'The request is too large.'});return '/api/tools/ipv6';}
  active++;try{await new Promise(resolve=>{const child=execFile(process.env.PHP_BINARY||'php',[path.join(__dirname,'../public/api/ipv6-readiness.php')],{timeout:40000,maxBuffer:1024*1024,windowsHide:true},(error,stdout)=>{try{if(error)throw error;const value=JSON.parse(stdout);reply(value.error?502:200,value);}catch{reply(502,{error:'The IPv6 testing service is unavailable. Check PHP cURL and socket support; the address expander still works locally.'});}resolve();});child.stdin.on('error',()=>{});child.stdin.end(Buffer.concat(chunks));});}finally{active--;}
  return '/api/tools/ipv6';
};

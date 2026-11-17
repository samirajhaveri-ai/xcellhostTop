const {execFile}=require('node:child_process');
const path=require('node:path');
let active=0;
module.exports=async function openGraphDevProxy(req,res){
  const reply=(status,body)=>{res.statusCode=status;res.setHeader('Content-Type','application/json');res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.end(JSON.stringify(body));};
  if(req.method!=='POST'){reply(405,{error:'Submit a POST request.'});return '/api/tools/open-graph';}
  if(active>=4){reply(429,{error:'Checks are busy. Please retry shortly.'});return '/api/tools/open-graph';}
  let length=0,chunks=[];
  try{for await(const chunk of req){length+=chunk.length;if(length>4096)throw new Error();chunks.push(chunk);}}catch{reply(413,{error:'The request is too large.'});return '/api/tools/open-graph';}
  active++;
  try{await new Promise(resolve=>{const child=execFile(process.env.PHP_BINARY||'php',[path.join(__dirname,'../public/api/open-graph.php')],{timeout:28000,maxBuffer:6*1024*1024,windowsHide:true},(error,stdout)=>{try{if(error)throw error;const value=JSON.parse(stdout);reply(value.error?502:200,value);}catch{reply(502,{error:'The local metadata fetch service is unavailable. Check PHP DOM and cURL support, or use the generator.'});}resolve();});child.stdin.on('error',()=>{});child.stdin.end(Buffer.concat(chunks));});}
  finally{active--;}
  return '/api/tools/open-graph';
};

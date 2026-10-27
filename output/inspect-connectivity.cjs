const fs=require('fs');const {parse,serialize}=require('parse5');
const dir='C:/Users/Vaishnavi/Downloads/page-HTML files/page-HTML files/Cloud-Connectivity';
for(const file of fs.readdirSync(dir)){
 const nodes=[];function walk(n){nodes.push(n);(n.childNodes||[]).forEach(walk);}walk(parse(fs.readFileSync(dir+'/'+file,'utf8')));
 const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
 const main=nodes.find(n=>n.tagName==='main');
 const scripts=nodes.filter(n=>n.tagName==='script'&&n.parentNode?.tagName==='body'&&!attr(n,'type')).map(n=>serialize(n));
 console.log(JSON.stringify({file,sections:main?.childNodes.filter(n=>n.tagName).map(n=>({tag:n.tagName,id:attr(n,'id')})),scripts:scripts.map(s=>({length:s.length,start:s.slice(0,90)})),forms:nodes.filter(n=>n.tagName==='form').map(n=>({id:attr(n,'id'),kind:attr(n,'data-xhform')})),localAssets:nodes.filter(n=>['img','script','link'].includes(n.tagName)).map(n=>attr(n,'src')||attr(n,'href')).filter(s=>s&&!/^(https?:|data:|#)/.test(s)),scroll:scripts.at(-1)?.match(/.{0,100}(?:scrollIntoView|scrollTo\().{0,130}/g)},null,2));
}

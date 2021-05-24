const http=require('http');
const fs = require('fs');
const page =fs.readFileSync(`${__dirname}/index.html`,'utf-8');

const server = http.createServer();
//CSS,IMG vs. hepsi nasıl page dahil edileceğini öğrendiğinde projeye devam edilecek.
server.on("request",(req,res)=>{
   
    console.log('Request has sent!');
    res.end(page);
    
});
server.listen(8080,'127.0.0.1',()=>{
    console.log('waiting for request');
});
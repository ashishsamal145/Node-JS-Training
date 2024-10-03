var http=require('http');
http.createServer((req,res)=>{
res.writeHead(700,{'Content-Type':'text/plain'});
res.write('Hello World of Node JS');
res.end();
}).listen(8000);
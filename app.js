const express = require ('express');
const app =express()
const port = 3000;

const 
server =app.get ("/MgHtoo",(req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'})
fs.readFile ('index.html',"/MgHtoo",(req,res)=>{
    if (error){
        res.writeHead(404)
        res.write('Error:File Not Found')
    }else{
        res.write (data)
    }
    res.end();
})
})
server.listen (port,()=>{
    console.log("server is now listening on port:3000");
})
import http from 'http'; 

const server = http.createServer((req, res)=>{
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('¡Hola Mundo!');
})

const host = '127.0.0.1'; 
const port = 3000; 
server.listen(port, host, ()=>{
    console.log(`El servidor se está ejecutando en http://${host}:${port}/`);
    
})
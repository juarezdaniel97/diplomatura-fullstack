import url from 'url'; 
import http from 'http';


const host = "127.0.0.1";
const port = 3000;

const servidor = http.createServer((request, response)=>{

    if (request.method === "GET" && request.url === "/") {
        response.statusCode = 200; 
        response.setHeader('Content-Type', 'text/plain'); 
        response.end('Esta es la página de Inicio');

    }else if (request.method === "GET" && request.url === "/sobre-nosotros"){
        
        response.statusCode = 200; 
        response.setHeader('Content-Type', 'text/plain'); 
        response.end('Esta es la página sobre nosotros.');

    }else{
        response.statusCode = 404; 
        response.setHeader('Content-Type', 'text/plain'); 
        response.end('La página solicitada no existe');
    }
}); 

servidor.listen(port, host, ()=>{
    console.log(`El servidor se encuentra en: http://${host}:${port}`)
})
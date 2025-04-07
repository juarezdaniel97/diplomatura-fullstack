import {EventEmitter} from 'events'; 

//Se crea un objeto del tipo EventEmitter
const emisor = new EventEmitter(); 

//Definimos el evento personalizado
emisor.on('saludo', (nombre)=>{
    console.log(`Hola, ${nombre}`);
    
});


//Emitimos el evento.
emisor.emit('saludo', 'Daniel Juarez'); 





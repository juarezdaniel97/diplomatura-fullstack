import { log } from 'console';
import fs from 'fs'; 


//Leer un archivo

fs.readFile('../datos/example.txt','utf-8', (err, data)=>{
    if (err) {
        throw err
    }

    console.log('Contenido del archivo',data)
}); 


//Escribir un archivo
fs.writeFile('../datos/example2.txt', 'Contenido nuevo..',(err)=>{
    if (err) {
        throw err
    }

    console.log("El archivo fue creado y escrito.");
});

//Renombrar el Archivo
fs.rename('../datos/example2.txt', '../datos/exampleRename.txt', (err)=>{
    if (err) {
        throw err
    }
    console.log("Se cambio el nombre del archivo exitosamente.");
    
})
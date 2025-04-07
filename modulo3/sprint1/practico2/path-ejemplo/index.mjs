import path from 'path';

const filePath = '/data/example.txt';

const dirName = path.dirname(filePath);

const baseName = path.basename(filePath);
const baseName2 = path.basename(filePath, '.txt');

const extPath = path.extname(filePath); 

const newPath = path.join('/user', 'docs','example.txt');


console.log('Directorio completo: ',filePath);
console.log('Directorio base:',dirName);
console.log('Nombre del archivo:',baseName);
console.log('Nombre del archivo sin la extención:',baseName2);
console.log('Extensión del archivo:',extPath);
console.log('Crear una ruta:',newPath);


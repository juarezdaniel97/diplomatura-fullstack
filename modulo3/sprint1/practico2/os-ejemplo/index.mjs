import { cp } from 'fs';
import os from 'os'; 

const arch = os.arch(); 

const system = os.platform(); 

const memory = os.totalmem(); 

const freeMemory = os.freemem(); 

const cpu = os.cpus(); 


console.log('Arquitectura del sistema: ', arch)
console.log('Sistema Operativo: ', system)
console.log('Memoria total: ', memory)
console.log('Memoria libre: ', freeMemory)
console.log('Imformación de CPU: ', cpu)
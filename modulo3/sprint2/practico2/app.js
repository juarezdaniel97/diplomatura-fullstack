
import { connect } from 'mongoose';

connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conexión exisitosa a MongoBD'))
.catch(error => console.error('Error al conectar a MongoBD:',error));

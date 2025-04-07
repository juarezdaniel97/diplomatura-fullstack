
class OperacionBasica{
    numero1=0;
    numero2=0;

    constructor(parametro1, parametro2){
        this.numero1 = parametro1;
        this.numero2 = parametro2;
    }

    getMostrarDatos(){
        console.log(this.numero1)
        console.log(this.numero2)
    }

    getSuma(){
        return this.numero1 + this.numero2;
    }

    getResta(){
        return this.numero1 - this.numero2;
    }
    
    getMultiplicacion(){
        return this.numero1 * this.numero2
    }
}


window.addEventListener('load',()=>{
    console.log("Aplicación corriendo")

    let objeto1 = new OperacionBasica(50,23);
    objeto1.getMostrarDatos();
})
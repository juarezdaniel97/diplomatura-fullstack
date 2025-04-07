
export const cubo = (numero)=>{
    return numero * numero * numero;
}

export const  objetoLiteal = {
    nombre: "Daniel",
    apellido: "Juarez",
    fecha: "26-09-2024"
}

export class Superficie{
    largo=0;
    ancho=0;

    constructor(p1, p2){
        this.largo = p1;
        this.ancho = p2;
    }

    getSuperficie(){
        return (this.largo*this.ancho)
    }
}
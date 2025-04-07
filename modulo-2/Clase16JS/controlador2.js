

window.addEventListener('load', ()=>{
    console.log('Running');

    const vector = [10,20,30];

    //Destructuring de Vector
    const [primerValor, segundoValor, tercerValor] = vector;
    console.log(primerValor)

    //Destructuring con valores por defecto

    const vector2 = ["rojo",'amarillo'];
    const [color1='azul', color2='verde', color3='violeta'] = vector2; //Posicion 1 está el color rojo y po defecto si no está va el azul
    console.log(color1, color2, color3);

    const Persona1 ={
        dni: 46512161,
        nombre: "Messi Lionel",
        docimicilio: "Miami 352"
    }

    const {
        dni,
        nombre,
        docimicilio
    } = Persona1;

    console.log(dni)
    console.log(nombre)
    console.log(docimicilio)


    /* Destructuring con paso de parámetros dentro de una función */

    const clubFutbol = {
        nombreClub: "River Plate",
        paginaOficial: "www.riverplate.com"
    };

    function mostrarDatos({nombreClub, paginaOficial}) {
        console.log(nombreClub)
        console.log(paginaOficial)
    }

    mostrarDatos(clubFutbol)
})
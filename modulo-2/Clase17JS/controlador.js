
const demora5segundo = ()=>{
    setTimeout(() => {
        console.log("esto deberia salir despues de 5seg")
    }, 5000);
}

const demora2segundo = ()=>{
    setTimeout (()=>{
        console.log("Me voy a demorar 2seg")
    },2000);
}

const demora7segundo= (fnParametro)=>{
    setTimeout (()=>{
        console.log("Me voy a demorar 7seg");
        fnParametro();
        
    },2000);
}


window.addEventListener('load', ()=>{
    console.log('Running...');
    
    /*
        Procesos Asincrinos:
        - setTimeout
        - setInterval
        - fetch
    */

    demora5segundo();
    demora2segundo();

    demora7segundo(()=>{
        console.log("Fn que deberia mostrar despues de 7seg")
    })


})
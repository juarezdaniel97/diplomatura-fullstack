

window.addEventListener('load', ()=>{

    console.log('Funcionando..');

    const persona1 ={
        nombre: 'Daniel',
        apellido: 'Juarez',
        edad: 26
    }

    console.log('Objeto Literal: ', persona1);

    //Convertir el Objeto Literal en Objeto JSON
    const objetoJSON = JSON.stringify(persona1);
    console.log(objetoJSON)

    console.log(typeof persona1)
    console.log(typeof objetoJSON)

    //Convertir un JSON en Objeto Literal
    const reconversion = JSON.parse(objetoJSON);
    console.log(reconversion)


})
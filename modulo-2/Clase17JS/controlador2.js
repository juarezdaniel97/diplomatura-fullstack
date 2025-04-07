
/*
    - funciones callback
    - promesas
    - async / await
*/

/*
    - setTimeout
    - setInterval
    - fetch -> es una PROMESA que ya está incluida en JS, permite hacer 2 pasos.
        1 paso: Consulta a un API
        2 paso: convertir el resultado a JSON

*/
const consultarAPI = async ()=>
    {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
        try {
            // Usamos fetch para obtener los datos
            const response = await fetch(apiUrl);
    
            // Convertimos la respuesta a formato JSON
            const games = await response.json();
    
            return games;
        }
        catch
        {
            console.log("se produjo un error");
        }
    
    }

window.addEventListener('load', async ()=>{

    let resultado = await consultarAPI()
    resultado.forEach(element => {
        console.log(element.name)
    });


})

/* 
    PROMESAS
*/

const fnDemora2segundo=()=>{
    console.log("Demora dos segundos")
}

const proceso1 = (resolve, reject)=>{
    {
        setTimeout(()=>{
            let salioBien = true;
            console.log("Esto demoro un tiempo.");
            
            if (salioBien) {
                resolve()
            }else{
                reject()
            }
        },7000)
    }
}

window.addEventListener('load', ()=>{

    //PROMESAS NIVEL 1
    /*const promesa = new Promise(fnDemora2segundo);

    promesa
        .then(
            ()=>{
                console.log("Esto se ejecuta despues de que la promesa termine")
            }
        )
        .catch(
            ()=>{
                console.log("Esto se ejecuta si el proceso falla.")
            }
        )*/

    //PROMESAS NIVEL 2
    const promesa2 = new Promise(proceso1)
        .then(
            ()=>{
                console.log("Todo salió bien")
            }
        )
        .catch(
            ()=>{
                console.log("Algo salió mal")
            }
        )
})
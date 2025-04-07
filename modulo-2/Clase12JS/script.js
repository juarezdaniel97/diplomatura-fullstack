
class EspiaDOM{
    vinculoDOM;
    vinculoALosTextAreaDOM;
    mensajesDelUsuario = [];


    constructor(vinculoDOM){
        this.vinculoDOM = vinculoDOM;
        this.getVinculoALosTextAreaDOM()
    }

    getVinculoALosTextAreaDOM(){
        this.vinculoALosTextAreaDOM = this.vinculoDOM.querySelectorAll('textarea')
    }

    mostrarTextAreaCapturado(){
        console.log(this.vinculoALosTextAreaDOM);
    }

    recorrerTextAreayDarComportamiento(){
        this.vinculoALosTextAreaDOM.forEach(element => {
            element.addEventListener('change', ()=>{
                console.log(element.value)
                this.mensajesDelUsuario.push(element.value.toUpperCase())
            })
            console.log(element)
        });
    }

    evaluarFrase(texto){

        let palabras = texto.toUpperCase().split(" ")
        
        if (palabras.includes("AUTO") && palabras.includes("QUIERO") && palabras.includes("COMPRAR")) {
            return true

        }else{
            return false
        }

    }

    analizarInteresDeCompra(){
        this.mensajesDelUsuario.forEach((element)=>{
            let fraseRobada = element;
            let tieneInteresDeCompra = this.evaluarFrase(fraseRobada);

            console.log(tieneInteresDeCompra)
        })
    }

}









window.addEventListener('load', ()=>{

    
    let objetoEspia = new EspiaDOM(document);
    console.log(objetoEspia)
    
    objetoEspia.mostrarTextAreaCapturado();
    
    objetoEspia.recorrerTextAreayDarComportamiento();


    const idBtnVerMensajes = document.querySelector("#idBtnVerMensajes");

    idBtnVerMensajes.addEventListener('click',()=>{
        objetoEspia.analizarInteresDeCompra();
    })


})
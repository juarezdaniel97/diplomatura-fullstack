

function validarMes(){
    const id_inputNombre = document.getElementById('inputIngresarNombre').value;
    const id_parrafoRespuesta = document.getElementById('resultado')


    const validar = funcion_validar_mes(id_inputNombre)

    if (id_inputNombre === "") {
        id_parrafoRespuesta.textContent = "El campo no puede estar vacío. ¡Por favor ingresa una palabra!.";
        id_parrafoRespuesta.className = "invalido2";
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(id_inputNombre)) {
        id_parrafoRespuesta.textContent = "Solo se permiten letras. ¡Por favor ingresa una palabra!.";
        id_parrafoRespuesta.className = "invalido2";
        return;
    }

    if (validar) {
        id_parrafoRespuesta.textContent=`¡El dato ingresado "${id_inputNombre}" corresponde a un mes válido.!`;
        id_parrafoRespuesta.className="valido";
    }else{
        id_parrafoRespuesta.textContent=`¡El dato ingresado "${id_inputNombre}" no corresponde a un mes válido.!`;
        id_parrafoRespuesta.className="invalido";
    }
}

const funcion_validar_mes = (mes)=>{
    const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE", "DICIEMBRE"]
    return meses.includes(mes.toUpperCase());
}

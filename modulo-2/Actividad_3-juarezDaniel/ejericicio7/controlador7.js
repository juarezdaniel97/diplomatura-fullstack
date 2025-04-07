
document.getElementById('idFormulario').addEventListener('submit',function(event){
    event.preventDefault()

    //Capturamos los datos del formulario
    const idCapitalIngresado = document.getElementById('idCapitalIngresado').value;
    const idCantidadMeses = document.getElementById('idCantidadMeses').value;

    //Verifico si los meses ingresados se encuentra entre 1 y 3
    if (verificarMeses(idCantidadMeses)) {
        return true
    }

    let rentabilidad_capital = funcionCapitalInvertir(idCapitalIngresado);

    let rentabilidad_meses = funcionRentabilidadMeses(rentabilidad_capital, idCantidadMeses);

    let rentabilidad_Cliente = funcionClienteDelBanco(rentabilidad_meses);
    
    let rentabilidad_automatica = funcoinRenovacionAutomatica(rentabilidad_meses);

    let rentabilidad_total = Number(rentabilidad_meses) + Number(rentabilidad_Cliente) + Number(rentabilidad_automatica)

    let total = Number(rentabilidad_total) + Number(idCapitalIngresado);

    funcionMostrarResultados(idCapitalIngresado, rentabilidad_meses, rentabilidad_Cliente, rentabilidad_automatica,rentabilidad_total,total);
});

const verificarMeses = (cantidadMeses)=>{

    if (Number(cantidadMeses) <= 0) {
        alert(`¡La cantidad de Meses ingresado (${cantidadMeses}) es incorrecto!`)
        return true
    }

    if (Number(cantidadMeses) > 3) {
        alert(`¡La cantidad de Meses ingresado (${cantidadMeses}) es incorrecto!`)
        return true
    }
}

const funcionCapitalInvertir = (idCapitalIngresado)=>{
    
    let capitalIngresado = Number(idCapitalIngresado);
    
    const MONTOINFERIOR = 500000;
    const MONTORANGO1 = 1500000;
    const MONTORANGO2 = 5000000;
    const MONTORANGO3 = 25000000;

    const RENTANBILIDAD1 = 0.06; //6%
    const RENTANBILIDAD2 = 0.075; //7.5%
    const RENTANBILIDAD3 = 0.085; //8.5%
    const RENTANBILIDAD4 = 0.095; //9.5%

    let rentabilidad = 0

    if (capitalIngresado < MONTOINFERIOR) {
        return rentabilidad ;
    }

    if (capitalIngresado >= MONTOINFERIOR && capitalIngresado <= MONTORANGO1 ) {
        rentabilidad = capitalIngresado * RENTANBILIDAD1
        return rentabilidad.toFixed(2);
    }

    if (capitalIngresado > MONTORANGO1 && capitalIngresado <= MONTORANGO2 ) {
        rentabilidad = capitalIngresado * RENTANBILIDAD2;
        return rentabilidad.toFixed(2);
    }

    if (capitalIngresado > MONTORANGO2 && capitalIngresado <= MONTORANGO3 ) {
        rentabilidad = capitalIngresado * RENTANBILIDAD3
        return rentabilidad.toFixed(2);
    }

    if (capitalIngresado > MONTORANGO3 ) {
        rentabilidad = capitalIngresado * RENTANBILIDAD4
        return rentabilidad.toFixed(2);
    }
}

const funcionRentabilidadMeses = (rentabilidad_capital, cantidadMeses)=>{
    let rentabilidad = 0; 
    rentabilidad = Number(rentabilidad_capital) * Number(cantidadMeses);
    return rentabilidad.toFixed(2);
}

const funcionClienteDelBanco = (rentabilidad_gral) =>{
    const checkCliente = document.getElementById('idClienteBanco').checked
    const RENTABILIDAD_CHECK = 0.007 //0.7%
    let resultado = 0;

    if (checkCliente) {
        resultado = rentabilidad_gral * RENTABILIDAD_CHECK;
        return resultado.toFixed(2);
    }else{
        return resultado.toFixed(2);
    }
}

const funcoinRenovacionAutomatica = (rentabilidad_gral)=>{
    const checkRenovacion = document.getElementById('idRenovacion').checked
    const RENTABILIDAD_CHECK = 0.009 //0.9%
    let resultado = 0;

    if (checkRenovacion) {
        resultado = rentabilidad_gral * RENTABILIDAD_CHECK;
        return resultado.toFixed(2);
    }else{
        return resultado.toFixed(2);
    }
}

const funcionMostrarResultados = (idCapitalIngresado, rentabilidad, rentabilidad_Cliente, rentabilidad_automatica,rentabilidad_total,total) =>{
    
    let capitalIngresado = Number(idCapitalIngresado)
    
    const lista_resultado = document.getElementById('idLista-resultado');
    const elementos = lista_resultado.getElementsByTagName('li');

    const array = Array.from(elementos);

    array[0].innerHTML = `Capital Invertido:<strong>$${capitalIngresado.toFixed(2)}</strong>`
    array[1].innerHTML = `Rentabilidad Plazo Fijo:<strong> $${rentabilidad}</strong>`
    array[2].innerHTML = `Adicional por cliente del Banco:<strong> $${rentabilidad_Cliente}</strong>`
    array[3].innerHTML = `Adicional por Plazo fijo Auto Renovable (c/3meses):<strong> $${rentabilidad_automatica}</strong>`
    array[4].innerHTML = `Rentabilidad Total:<strong id="idrentabilidad_total"> $${rentabilidad_total.toFixed(2)}</strong>`
    array[5].innerHTML = `TOTAL (Cap. invertido + Rent. Total):<strong id="idtotal_final"> $${total.toFixed(2)}</strong>`
    
}
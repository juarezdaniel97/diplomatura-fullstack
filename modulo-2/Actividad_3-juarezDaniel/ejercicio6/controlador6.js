

document.getElementById('facturaForm').addEventListener('submit',function(event){
    event.preventDefault()
    
    //Capturamos los datos del cliente
    const idNombreCliente = document.getElementById('idNombreCliente').value;
    const idDireccionCliente = document.getElementById('idDireccionCliente').value;
    const idEmailCliente = document.getElementById('idEmailCliente').value;
    const idArticuloSeleccionado = document.getElementById('idArticuloSeleccionado').value;
    const idImporteBase = document.getElementById('idImporteBase').value;
    
    console.log(idNombreCliente)
    console.log(idDireccionCliente)
    console.log(idEmailCliente)
    console.log(idArticuloSeleccionado)
    console.log(idImporteBase)
    
    //Ocultamos el formulario
    document.getElementById('facturaForm').style.display = 'none';

    //Llamamos a la función Generar Factura
    generarFactura(idNombreCliente,idDireccionCliente,idEmailCliente,idArticuloSeleccionado,idImporteBase)
});

function generarFactura(idNombreCliente,idDireccionCliente,idEmailCliente,idArticuloSeleccionado,idImporteBase) {
    
    //Datos generales de la factura
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; 
    let anio = fechaActual.getFullYear();
    let hora = fechaActual.toLocaleTimeString();

    //Datos del cliente
    let nombreCliente = idNombreCliente;
    let direccionCliente = idDireccionCliente; 
    let emailCliente = idEmailCliente;

    //Datos del importe calculado 
    let IVAcalculado = calcularIVA(idImporteBase,idArticuloSeleccionado);
    let importeTotal = Number(idImporteBase) + IVAcalculado;
    let importeBase = Number(idImporteBase); 

    //Datos para la Tabla (Tipo de articulo con su respectivo porcentaje)
    let tipoArticuloSeleccionado = Number(idArticuloSeleccionado);
    let porcentajeIVA = verificarTipoAriculo(tipoArticuloSeleccionado)

    //Mostramos la Factura completa
    mostrarFactura(dia, mes, anio,hora, nombreCliente, direccionCliente,emailCliente,tipoArticuloSeleccionado, porcentajeIVA ,importeBase, IVAcalculado, importeTotal)

}

const calcularIVA = (importeBase, tipoArticulo)=>{
    let IVA = 0;
    
    switch (Number(tipoArticulo)) {
        case 1:
            //Si es TIPO 1: 21%
                IVA = Number(importeBase) * 0.21;
            break;
        
        case 2:
            //Si es TIPO 2: 27%
                IVA = Number(importeBase) * 0.27;
            break;
        case 3:
            //Si es TIPO 3: 10.5%
                IVA = Number(importeBase) * 0.105;
            break;
        case 4:
            //Si es TIPO 4: 5%
                IVA = Number(importeBase) * 0.05;
            break;
            
        case 5:
            //Si es TIPO 5: 0%
                IVA = Number(importeBase)
            break;
        default:
            alert("NO EXISTE EL TIPO DE PRODUCTO SELECCIONADO")
            break;
    }
    
    return IVA
}

/*Esta función (verificarTipoArticulo) es más que nada para retornar el String 
con el porcentaje para luego mostrar en la tabla*/
const verificarTipoAriculo = (tipoArticuloSeleccionado)=>{
    let porcentaje_IVA = 0;
    
    switch (tipoArticuloSeleccionado) {
        case 1:
            //Si es TIPO 1: 21%
                porcentaje_IVA = "21%";
            break;
        
        case 2:
            //Si es TIPO 2: 27%
                porcentaje_IVA = "27%";
                break;
        case 3:
            //Si es TIPO 3: 10.5%
                porcentaje_IVA = "10.5%";
                break;
        case 4:
            //Si es TIPO 4: 5%
                porcentaje_IVA = "5%";
                break;
            
        case 5:
            //Si es TIPO 5: 0%
                porcentaje_IVA = "0%";
            break;
        default:
            alert("NO EXISTE EL PORCETAJE")
            break;
    }
    return porcentaje_IVA
}

function mostrarFactura(dia, mes, anio, hora, nombreCliente, direccionCliente, emailCliente, tipoArticuloSeleccionado, porcentajeIVA, importeBase, IVAcalculado, importeTotal) {
    
    //Obtenemos el nodo donde se mostrará la factura
    const idFactura = document.getElementById('idFactura');
    idFactura.style.display = 'block';
    
    idFactura.innerHTML = `<div class="contenedor-factura">
        <header>
            <h1>Factura</h1>
            <div class="detalles-cliente">
                <p><strong>Diplomatura en JS</strong></p>
            </div>
        </header>

        <section class="detalle-factura">
            <div>
                <p><strong>Factura N°:</strong> 000123</p>
                <p><strong>Fecha:</strong> ${dia}/${mes}/${anio}</p>
                <p><strong>Hora:</strong> ${hora} hs.</p>
            </div>
            <div>
                <p><strong>Cliente:</strong> ${nombreCliente}</p>
                <p><strong>Dirección:</strong> ${direccionCliente}</p>
                <p><strong>Teléfono:</strong> (383) 4123456</p>
                <p><strong>Email:</strong> ${emailCliente}</p>
            </div>
        </section>

        <table class="tabla-factura">
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Tipo</th>
                    <th>Impuesto IVA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Articulo 1</td>
                    <td>${tipoArticuloSeleccionado}</td>
                    <td>${porcentajeIVA}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">Importe base</td>
                    <td>$${importeBase}</td>
                </tr>
                <tr>
                    <td colspan="3">Importe IVA</td>
                    <td>$${IVAcalculado}</td>
                </tr>
                <tr>
                    <td colspan="3"><strong>Importe Final</strong></td>
                    <td><strong>$${importeTotal}</strong></td>
                </tr>
            </tfoot>
        </table>
    </div>`
}

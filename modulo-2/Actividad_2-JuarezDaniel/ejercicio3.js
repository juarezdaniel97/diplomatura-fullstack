console.log("Ejercicio N°3")

const CAMION = 22000;
const CAMIONETA = 12000;
const AUTOMOVIL = 4000;
const MOTOS = 1500;
let cantidadCamion = 0;
let cantidadCamioneta = 0;
let cantidadAutomovil = 0;
let cantidadMotos = 0;


do {
    
    opcionMenu = Number(prompt('Elegir una Opción:\n 1.- Cobrar Camión: \n 2.- Cobrar Camioneta:  \n 3.- Cobrar Automovil: \n 4.- Cobrar Motos: \n 5.- Rendimiento diario:'))
    
    switch (opcionMenu) {
    
        case 1:
            funcionMostrarComprobante(1)
            cantidadCamion++;
            break;

        case 2:
            funcionMostrarComprobante(2)
            cantidadCamioneta++;
            break;

        case 3:
            funcionMostrarComprobante(3)
            cantidadAutomovil++;
            break;

        case 4:
            funcionMostrarComprobante(4)
            cantidadMotos++;
            break;

        case 5:
            funcionRendimientoDiario()
            break;
    
        default:
            alert("Opción Inválida!")
            break;
    }


    valorComparar = (prompt("¿Desea Continuar? si/no: "))
} while ("si" === valorComparar);


function funcionMostrarComprobante(opcion){
    
    switch (opcion) {
        case 1:
            alert("-------- COMPROBANTE DE PAGO ------- \n \t Tipo Vehículo: CAMIÓN \n \tFecha: 12-0-2024  \n \t importe :$"+CAMION)
            break;
        case 2:
            alert("-------- COMPROBANTE DE PAGO ------- \n \t Tipo Vehículo: CAMIONETA \n \tFecha: 12-0-2024  \n \t importe :$"+CAMIONETA)
            break;
        case 3:
            alert("-------- COMPROBANTE DE PAGO ------- \n \t Tipo Vehículo: AUTOMOVIL \n \tFecha: 12-0-2024  \n \t importe :$"+AUTOMOVIL)
            break;
        case 4:
            alert("-------- COMPROBANTE DE PAGO ------- \n \t Tipo Vehículo: MOTOS \n \tFecha: 12-0-2024  \n \t importe :$"+MOTOS)
            break;
    }
}

function funcionRendimientoDiario() {
    let totalCamion = cantidadCamion * CAMION;
    let totalCamioneta = cantidadCamioneta * CAMIONETA;
    let totalAutomovil = cantidadAutomovil * AUTOMOVIL;
    let totalMotos = cantidadMotos * MOTOS;
    let total = totalCamion+totalCamioneta+totalAutomovil+totalMotos;

    if (cantidadAutomovil > cantidadCamioneta) {
        alert(" ---------- RENDIMIENTO DIARIO ---------\n \t Tipo: CAMIÓN -- Cantidad: "+cantidadCamion+" -- SubTotal: $"+totalCamion+"\n \t Tipo: CAMIONETA -- Cantidad: "+cantidadCamioneta+" -- SubTotal: $"+totalCamioneta+"\n \t Tipo: AUTOMOVIL -- Cantidad: "+cantidadAutomovil+" -- SubTotal: $"+totalAutomovil+"\n \t Tipo: MOTOS -- Cantidad: "+cantidadMotos+" -- SubTotal: $"+totalMotos+"\n\n\t\t ---- TOTAL GENERAL: $"+total+"\n\n \t\t ¡Pasaron más AUTOS que Camionetas!")
    }else{
        if (cantidadAutomovil === cantidadCamioneta) {
            alert(" ---------- RENDIMIENTO DIARIO ---------\n \t Tipo: CAMIÓN -- Cantidad: "+cantidadCamion+" -- SubTotal: $"+totalCamion+"\n \t Tipo: CAMIONETA -- Cantidad: "+cantidadCamioneta+" -- SubTotal: $"+totalCamioneta+"\n \t Tipo: AUTOMOVIL -- Cantidad: "+cantidadAutomovil+" -- SubTotal: $"+totalAutomovil+"\n \t Tipo: MOTOS -- Cantidad: "+cantidadMotos+" -- SubTotal: $"+totalMotos+"\n\n\t\t ---- TOTAL GENERAL: $"+total+"\n\n \t\t ¡Pasaron la misma cantidad de AUTOS y CAMIONETAS!")
        }else{
            alert(" ---------- RENDIMIENTO DIARIO ---------\n \t Tipo: CAMIÓN -- Cantidad: "+cantidadCamion+" -- SubTotal: $"+totalCamion+"\n \t Tipo: CAMIONETA -- Cantidad: "+cantidadCamioneta+" -- SubTotal: $"+totalCamioneta+"\n \t Tipo: AUTOMOVIL -- Cantidad: "+cantidadAutomovil+" -- SubTotal: $"+totalAutomovil+"\n \t Tipo: MOTOS -- Cantidad: "+cantidadMotos+" -- SubTotal: $"+totalMotos+"\n\n\t\t ---- TOTAL GENERAL: $"+total+"\n\n \t\t ¡Pasaron más CAMIONETAS que Autos!")
        }
    }
}

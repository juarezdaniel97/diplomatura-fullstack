
/*
    Ejercicio Nro. 01:
    Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
    denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
    teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
    pesos argentinos).
    
    Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
    sabiendo que no se puede pasar el límite establecido.
*/
console.log("Actividad N° 1")

const descuento = 50 //50% Descuento de compras
const decuentoMaximo = 80.000

let valorCompra = Number(prompt("Introduzca el valor de la compra realizada"))

if (valorCompra <= decuentoMaximo) {
    let valorDescuento = (valorCompra*descuento)/100
    let valorTotalConDescuento = valorCompra - valorDescuento

    console.log("1 - Valor compra realizada: ", valorCompra)
    console.log("2 - Descuento establecido con el 50%: ", valorDescuento)
    console.log("3 - Valor total a pagar con el descuesto incluido: ", valorTotalConDescuento)

}else{
    console.log("Su monto supera los $80.000,00 por lo tanto no le corresponde un descuento. Valor de la campra:$",valorCompra)

}
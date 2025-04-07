/*
    Ejercicio Nro. 02:
Un comercio que vende bolsas de alimentos para mascotas, trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros, lo que le permite trabajar con descuentos muy interesantes para sus 
clientes. Las marcas con las que trabaja son:

                                    Catálogo de Productos
Código      Descripción     x Unidad    (cantidad >= 5 y cantidad <=10)     cantidad>=11 
  1         Dogui           38.000              36.000                          34.000
  2         Tierntitos      31.000              29.000                          27.000
  3         DogPro          46.000              44.000                          42.000


Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
comprar y que solo determine el importe total a pagar
*/


let codigoProducto = Number(prompt("Ingrese el código del producto"))
let cantidadProducto = Number(prompt("Ingrese la cantidad del producto"))


switch (codigoProducto) {
    case 1:
        let precioUnidadDogui = 38000
        let precioEntre5y10Dogui = 36000
        let preciomayor11Dogui = 34000
        
        if (cantidadProducto >= 1 && cantidadProducto <= 4 ) {
            let total = cantidadProducto * precioUnidadDogui
            console.log("El monto total a pagar es: $",total)
            break
        }

        if (cantidadProducto >=5 && cantidadProducto <=10) {
            let total = cantidadProducto * precioEntre5y10Dogui
            console.log("El monto total a pagar es: $",total)

        }else{
            let total = cantidadProducto * preciomayor11Dogui
            console.log("El monto total a pagar es: $",total)
        }
        break;

    case 2:
        let precioUnidadTiernitos = 31000
        let precioEntre5y10Tiernitos = 29000
        let preciomayor11Tiernitos = 27000

        if (cantidadProducto >= 1 && cantidadProducto <= 4 ) {
            let total = cantidadProducto * precioUnidadTiernitos
            console.log("El monto total a pagar es: $",total)
            break
        }

        if (cantidadProducto >=5 && cantidadProducto <=10) {
            let total = cantidadProducto * precioEntre5y10Tiernitos
            console.log("El monto total a pagar es: $",total)

        }else{
            let total = cantidadProducto * preciomayor11Tiernitos
            console.log("El monto total a pagar es: $",total)
        }
        break;

    case 3:
        let precioUnidadDogPro = 46000
        let precioEntre5y10DogPro = 44000
        let preciomayor11DogPro = 42000

        if (cantidadProducto >= 1 && cantidadProducto <= 4 ) {
            let total = cantidadProducto * precioUnidadDogPro
            console.log("El monto total a pagar es: $",total)
            break
        }

        if (cantidadProducto >=5 && cantidadProducto <=10) {
            let total = cantidadProducto * precioEntre5y10DogPro
            console.log("El monto total a pagar es: $",total)

        }else{
            let total = cantidadProducto * preciomayor11DogPro
            console.log("El monto total a pagar es: $",total)
        }
        break;
    
    default:
        alert("El código no existe")
        break;
}
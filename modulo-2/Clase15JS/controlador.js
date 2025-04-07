import { clientesSucursal1, clientesSucursal2, persona1, cuentaCorriente, productos, facturas } from "./datos.js"

window.addEventListener('load',()=>{
    console.log("Funcionando..")

    /*--------------------------------------*/
    /*   SPREAD OPERATOR                    */
    /*--------------------------------------*/
        //console.log(clientesSucursal1);
        //console.log(clientesSucursal2);
        let vectorAcumulado = [...clientesSucursal1, ...clientesSucursal2];

        //console.log(vectorAcumulado);

    /*--------------------------------------*/
    /*   SPREAD OPERATOR CON OBJETOS        */
    /*--------------------------------------*/

        console.log("Persona:",persona1);
        console.log("Cuenta:",cuentaCorriente);

        let personaCuentaCorriente = {
            ...persona1,
            ...cuentaCorriente
        }

        console.log(personaCuentaCorriente)
    

    /*--------------------------------------*/
    /*   REDUCE --> Es para vectores        */
    /*--------------------------------------*/

    /*
        Sirve para contabilizar, contar, acumular elementos 
        recorriendo un vector ó array.
        
        foreach -> es para recorrer todos los elementos
        
        filter -> me devueve un vector con los elementos filtrados
        
        map -> recorre todos los elemetos, le aplica una funcion de transformacion
        y me devuelve los elementos nuevos.

        reduce -> 
        Ejemplo a resolcer: vamos a contar los elementos del vector de producto
    */

        /* FORMA 1: Tradicional*/
        let contadorEnPtoReposicion = 0;
        productos.forEach((element)=>{
            if (element.stock < 10) {
                contadorEnPtoReposicion++;
            }
        })
        console.log(contadorEnPtoReposicion);
    

        /*FORMA 2: Reduce */
        let resultado1 = productos.reduce((contador, element)=>{
            if (element.stock < 10) {
                contador++;
            }
            return contador;
        },0);

        console.log(resultado1)

        /*FORMA 2: Reduce mejorada (operador ternario) */
        let resultado2 = productos.reduce((contador, element)=>{return element.stock<10 ? contador+1:contador},0);
        console.log(resultado2);




        /*----------------------------------------------*/
        /*   REDUCE --> con Objeto literales            */
        /*----------------------------------------------*/

        let resultado3 = facturas.reduce((objetoLiteral, element)=>{
            if (element.cantidad>=4) {
                objetoLiteral.contadorFactura++;
                objetoLiteral.totalFactura = objetoLiteral.totalFactura + element.total;
            }
            return objetoLiteral
        },{contadorFactura:0, totalFactura:0});

        console.log(resultado3)
})
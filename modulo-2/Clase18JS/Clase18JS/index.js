/*----------------------------------------------*/
/* (1ro:) importamos el Vector desde un módulo */
/*----------------------------------------------*/
import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";
import {FiltrosImpGanancias,FiltrosIntegranteSociedades,FiltrosEmpleador} from "./Datos/VectorFiltros.js"
import estadoAplicacion from "./Datos/estadoAplicacion.js";


    /*----------------------------------------------------------------------*/
    /*(5to:) Crear un arroy function de filtrado por nombre*/
    /*----------------------------------------------------------------------*/
    const fnFiltrarPorNombre = (pNombre)=>{
        const vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPDenominacion.includes(pNombre))
        return vectorFiltrado;
    }


    /*-----------------------------------------------------------------------------*/
    /*(6to:) Crear un arroy function que reciba un array y genere filas de un tabla*/
    /*-----------------------------------------------------------------------------*/
    const fnGenerarFilasTablas = (pVector) =>{
        
        /* Map recorro elemento por elemento y los transforma. 
        Por cada elemento devuelve una fila */
        const filasDeTabla = pVector.map( element =>{
            let filaTabla = document.createElement('tr');
            
            let celda1 = document.createElement('td');
            celda1.textContent = element.PadronAFIPCUIT;
            
            let celda2 = document.createElement('td');
            celda2.textContent = element.PadronAFIPDenominacion;
            
            let celda3 = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox"; 
            celda3.appendChild(checkbox);;
            
            let celda4 = document.createElement('td');
            let imgDinamica = document.createElement('img');
            imgDinamica.style.width ="24px";
            imgDinamica.style.height="24px";
            imgDinamica.src="./verdatos.png";
            celda4.appendChild(imgDinamica);

            celda4.addEventListener('click',(event)=>{
                
                /*  La propiedad stopPropagation me permite no propagar el evento.
                    En este caso tengo un evento en la CELDA y también un evento en la FILA,
                    por lo que si no utilizara esa propiedad, cunando presione en la CELDA 
                    se dispararían 2 eventos, primero el de la CELDA propiamente dicho y luego 
                    el de la FILA. 

                */
                event.stopPropagation() 

                alert("Debería mostrar más datos")
            })


            filaTabla.appendChild(celda1);
            filaTabla.appendChild(celda2);
            filaTabla.appendChild(celda3);
            filaTabla.appendChild(celda4);

            filaTabla.addEventListener('click',()=>{
                alert('Presionaste una fila');
            })

            return filaTabla; //Return elemento a elemento
        })

        return filasDeTabla; //Return vector con las filas
    }


    /*-----------------------------------------------------------------------------------------------*/
    /*(7to:) Crear un arroy function que reciba un array y muestre por patanlla las filas de la tabla*/
    /*-----------------------------------------------------------------------------------------------*/
    const fnAgregarFilasTablas = (pFilas, pCuerpoTabla)=>{
        
        fnLimpiarTabla(pCuerpoTabla);
        
        pFilas.forEach((element)=>{
            pCuerpoTabla.appendChild(element)
        })
    }


    /*-------------------------------------------------------------------------------*/
    /*(8vo:) Crear un arroy function que reciba un cuerpo de la tabla y lo limpie */
    /*-----------------------------------------------------------------------------*/
    const fnLimpiarTabla = (pCuerpoTabla)=>{
        pCuerpoTabla.innerHTML = "";
    }

    /*-------------------------------------------------------------------------------*/
    /*(9vo:) Crear un arroy function que reciba una CUIT y los valide */
    /*-------------------------------------------------------------------------------*/
    const fnValidarCuit = (pCuit)=>{
        return pCuit.length === 11 ? true:false; //Operador ternario
    }


    /*-------------------------------------------------------------------------------*/
    /*(10mo:) Crear un arroy function que reciba una CUIT y realizce un búsqueda     */
    /*-------------------------------------------------------------------------------*/
    const fnFiltrarPorCuit = (pCuit)=>{
        let vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPCUIT === pCuit);
        return vectorFiltrado;
    }


    /*-------------------------------------------------------------------------------*/
    /*(11mo:) Crear un arroy function que reciba un vector y genere los SELECT     */
    /*-------------------------------------------------------------------------------*/
    const fnCompletarSelector = (idSelector, vectorDeOpciones) =>{
        vectorDeOpciones.forEach(element =>{
            let opcionDinamica = document.createElement('option');
                opcionDinamica.value = element.codigo;
                opcionDinamica.textContent = element.descripcion;

                idSelector.appendChild(opcionDinamica);
        })
    }


    /*----------------------------------------------------------------------*/
    /*(2ro:) Evento inicial*/
    /*----------------------------------------------------------------------*/
window.addEventListener("load", ()=>{
    console.log("Funcionando Index JS ");
    
        /*----------------------------------------------------------------------*/
        /*(3ro:) Me vinculo a los elementos/objetos del DOM mediante constantes */
        /*----------------------------------------------------------------------*/

        // BLOQUE 01 - BUSQUEDA POR CUIT
            const idCuitIngresado = document.querySelector("#idCuitIngresado");
            const idBtnBuscarPorCuit = document.querySelector("#idBtnBuscarPorCuit");

        // BLOQUE 02 - BUSQUEDA POR NOMBRE
            const idNombreIngresado = document.querySelector("#idNombreIngresado");
            const idBtnBuscarPorNombre = document.querySelector("#idBtnBuscarPorNombre");
            const idCheckHabilitarBusquedaProgresiva = document.querySelector("#idCheckHabilitarBusquedaProgresiva");

        // BLOQUE 03 - LISTADO DE CLIENTES
            const idBtnVerClientesSeleccionados = document.querySelector("#idBtnVerClientesSeleccionados");
            const idCuerpoTabla = document.querySelector("#idCuerpoTabla");

        // BLOQUE 04 - FILTROS VARIOS 
        const idSelectorImpuestoGanancias = document.querySelector("#idSelectorImpuestoGanancias");
        const idSelectorIntegranteSociedades = document.querySelector("#idSelectorIntegranteSociedades");
        const idSelectorEsEmpleador = document.querySelector("#idSelectorEsEmpleador");
        const idBtnFiltrar = document.querySelector("#idBtnFiltrar");

        
        // visualizamos por consola los elementos/objetos //
        console.log(idCuitIngresado);
        console.log(idBtnBuscarPorCuit);
        console.log(idNombreIngresado);
        console.log(idBtnBuscarPorNombre);
        console.log(idCuerpoTabla);
        console.log(idCheckHabilitarBusquedaProgresiva);

        console.clear()
        console.log(FiltrosEmpleador)
        console.log(FiltrosImpGanancias)
        console.log(FiltrosIntegranteSociedades)



        // MANTENER EL ESTADO DE LA APLICACIÓN
        idCuitIngresado.addEventListener('input', ()=>{
            estadoAplicacion.setCuilIngresado(idCuitIngresado.value);
        })

        idNombreIngresado.addEventListener('input', ()=>{
            estadoAplicacion.setNombreIngresado(idNombreIngresado.value);
        })

        idCheckHabilitarBusquedaProgresiva.addEventListener('change',()=>{
            estadoAplicacion.setHabilitarBusquedaProgresiva(idCheckHabilitarBusquedaProgresiva.checked);
        })

        //BOTÓN BUSCAR POR NOMBRES
        idBtnBuscarPorNombre.addEventListener('click', ()=>{
            
            /*Primero: realizamos un filtrado por nombre */
            const vectorResultantes = fnFiltrarPorNombre(estadoAplicacion.nombreIngresado);
            
            /*Segundo: Generamos un vector donde los elementos son filas de una tabla. Cada fila contiene datos
            del vector filtrado anteriormente */
            const filasDeTabla = fnGenerarFilasTablas(vectorResultantes)

            /*Tercero: Invocar a una función que muestre el vector en la tabla por pantalla.*/
            fnAgregarFilasTablas(filasDeTabla, idCuerpoTabla);

        })

        //BOTÓN BUSCAR POR CUIT
        idBtnBuscarPorCuit.addEventListener('click',()=>{

            if (fnValidarCuit(estadoAplicacion.cuilIngresado)) {
                const vectorResultantes = fnFiltrarPorCuit(estadoAplicacion.cuilIngresado);
                const filasDeTabla = fnGenerarFilasTablas(vectorResultantes);
                fnAgregarFilasTablas(filasDeTabla, idCuerpoTabla);
            }else{
                alert('Por favor, ingrese un cuit válido');
            }
        })

        //PINTAR LOS FILTROS  EN LOS SELECTORES DEL HTML
        fnCompletarSelector(idSelectorImpuestoGanancias, FiltrosImpGanancias)
        fnCompletarSelector(idSelectorEsEmpleador, FiltrosEmpleador)
        fnCompletarSelector(idSelectorIntegranteSociedades, FiltrosIntegranteSociedades)
        
        //GUARDAR EL ESTADO DE LOS SELECTORES EN EL ESTADO DE LA APLICACIÓN 
        idSelectorImpuestoGanancias.addEventListener("change",()=>
            {
                estadoAplicacion.setfiltrosImpGanancias(idSelectorImpuestoGanancias.value);

                console.log(estadoAplicacion);

            })
        idSelectorIntegranteSociedades.addEventListener("change",()=>{

            estadoAplicacion.setfiltrosIntegranteSociedades(idSelectorIntegranteSociedades.value);

            console.log(estadoAplicacion);

        })

        idSelectorEsEmpleador.addEventListener("change",()=>
            {

                estadoAplicacion.setfiltrosEmpleador(idSelectorEsEmpleador.value);

                console.log(estadoAplicacion);

        })


        //BUSCAR POR SELECTORES
        idBtnFiltrar.addEventListener('click',()=>{
            alert('Filtrar datos por selector Selectors')
        });

    })
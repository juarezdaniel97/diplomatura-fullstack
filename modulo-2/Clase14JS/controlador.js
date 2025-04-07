import paisesAmerica from './datos.js';
//Importamos el array con los paises - utilizado en la Forma 4
import VectorDeGastosDePatentamiento from './datos2.js';

window.addEventListener('load', ()=>{
    console.log("Funcionado..")
    console.log(paisesAmerica)

    const idBtn1 = document.querySelector("#idBtn1");
    const contendor1 = document.querySelector('#contendor1'); 

    console.log(idBtn1)
    console.log(contendor1)



    /*------------------------------------------------------------*/
    /*     Forma 1: Generar Botones Dinámicos                     */
    /*------------------------------------------------------------*/

    idBtn1.addEventListener('click',()=>{
        alert("Vamos a crear botones dinámicos")

        for(let i=1; i<=5; i++){
            let btnDianamico = document.createElement('input');
            btnDianamico.type = "button";
            btnDianamico.value = `Soy el btn ${i}`;

            btnDianamico.addEventListener('click', ()=>{
                alert(`Soy el botón generado dinámicamente ${i}`)
            })

            contendor1.appendChild(btnDianamico);
        }
    })



    /*------------------------------------------------------------*/
    /*  Forma 2: Generar Botones Danámicos - Vector               */
    /*------------------------------------------------------------*/
    const idBtn2 = document.querySelector("#idBtn2");
    const contenedor2 = document.querySelector("#contendor2");

    let botonesPeaje =["CAMIONES", "CAMIONETAS", "AUTOS","MOTOS"];

    idBtn2.addEventListener('click',()=>{
            
        botonesPeaje.forEach((element)=>{
            let btnDianamico = document.createElement('input');
            btnDianamico.type="button";
            btnDianamico.value=`Btn ${element}`;

            btnDianamico.addEventListener('click',()=>{
                alert(`Aquí debería cobrar ${element}`)
            })

            contenedor2.appendChild(btnDianamico);
        })
    })




    /*------------------------------------------------------------*/
    /* Forma 3: Crear botones con un vector con objetos literales */
    /*------------------------------------------------------------*/
        const idBtn3 = document.querySelector("#idBtn3");
        const contenedor3 = document.querySelector("#contendor3");
        
        idBtn3.addEventListener('click',()=>{

            const opcionBtnPeaje = [
                {
                    nombreVehiculo:"CAMION",
                    precioVehiculo:22550
                },
                {
                    nombreVehiculo: "CAMIONETA",
                    precioVehiculo:13250
                },
                {
                    nombreVehiculo: "AUTOS",
                    precioVehiculo: 4520
                },
                {
                    nombreVehiculo: "MOTOS",
                    precioVehiculo: 2770
                }
            ];


            opcionBtnPeaje.forEach((element)=>{
                element.contabilizarVechiculo = 0;
                element.totabilizadorVehiculo = 0; 

                const btnDianamico = document.createElement('input');
                
                btnDianamico.type="button";
                btnDianamico.value=`${element.nombreVehiculo} - ${element.precioVehiculo}`;

                btnDianamico.addEventListener('click',()=>{
                    element.contabilizarVechiculo = element.contabilizarVechiculo + 1;
                    element.totabilizadorVehiculo = element.totabilizadorVehiculo + element.precioVehiculo;
                    
                    console.log(opcionBtnPeaje)
                })

                contenedor3.appendChild(btnDianamico);

            })
        }) 




        /*------------------------------------------------------------*/
        /*  Forma 4: Selector Dinámico de Paises                      */
        /*------------------------------------------------------------*/
        const idBtn4 = document.querySelector("#idBtn4");
        const contenedor4 = document.querySelector("#contendor4");
        const idSelectorPais = document.querySelector("#idSelectorPais");

        idBtn4.addEventListener('click',()=>{
            idSelectorPais.innerHTML = "";
            paisesAmerica.forEach((element)=>{
                let opcionDinamica = document.createElement('option');
                opcionDinamica.textContent = `${element.nombre} - ${element.capital}`;
                opcionDinamica.value = element.id

                idSelectorPais.appendChild(opcionDinamica);
                contenedor4.appendChild(idSelectorPais);
            })
        })



        /*------------------------------------------------------------*/
        /*  Forma 5: Generar Checkbox Dinámicos                       */
        /*------------------------------------------------------------*/
        
        const idBtn5 = document.querySelector("#idBtn5");
        const contendor5 = document.querySelector("#contendor5");

        idBtn5.addEventListener('click',()=>{
            
            VectorDeGastosDePatentamiento.forEach((element)=>{

                //element.seleccionado = false; 
                
                let labelDinamico = document.createElement('label');
                let checkboxDinamico = document.createElement('input');

                labelDinamico.textContent = `${element.nombre} - ${element.precio}`;
                checkboxDinamico.type = "checkbox";

                element.selectorDinamico = checkboxDinamico;
                contendor5.appendChild(labelDinamico);
                contendor5.appendChild(checkboxDinamico);

            })
            console.log(VectorDeGastosDePatentamiento)
        })
        
        /*Boton para verificar los checkbox seleccionados*/
        const idBtnPresionado = document.querySelector("#idBtnPresionado");
        idBtnPresionado.addEventListener('click',()=>{
            console.clear();
            let totalAPagar = 0;

            VectorDeGastosDePatentamiento.forEach((element)=>{
                if (element.selectorDinamico.checked) {
                    console.log(element.selectorDinamico);
                    console.log(element.selectorDinamico.checked);
                    totalAPagar = totalAPagar + element.precio;
                }
            })
            console.log(`Total a pagar es: $${totalAPagar}`);
        })


        /*------------------------------------------------------------*/
        /*  Forma 6: Generar Divs Dinámicos                           */
        /*------------------------------------------------------------*/
        
        const idBtn6 = document.querySelector("#idBtn6");
        const contenedor6 = document.querySelector("#contenedor6");

        idBtn6.addEventListener('click',()=>{
            paisesAmerica.forEach((element)=>{
                console.log(element)

                let divDinamico = document.createElement('div');
                let tituloPais = document.createElement('h2');
                let capitalPais = document.createElement('h3');
                let imgBandera = document.createElement('img');
                

                tituloPais.textContent = element.nombre;
                capitalPais.textContent = element.capital;

                imgBandera.src = element.bandera;
                imgBandera.style.width = "80px";
                imgBandera.style.height = "50px";

                imgBandera.addEventListener('click',()=>{
                    alert(`El país que ud. Elegió corresponde a la región ${element.region} y su población es ${element.poblacion}`)
                })
                divDinamico.appendChild(tituloPais);
                divDinamico.appendChild(capitalPais);
                divDinamico.appendChild(imgBandera);

                contenedor6.appendChild(divDinamico);
            })
        })




        /*------------------------------------------------------------*/
        /*  Forma 7: Generar Tablas Dinámicos                         */
        /*------------------------------------------------------------*/
        
        const idBtn7 = document.querySelector("#idBtn7");
        const contenedor7 = document.querySelector('#contenedor7');
        const idCuerpoTabla = document.querySelector("#idCuerpoTabla");

        idBtn7.addEventListener('click',()=>{

            idCuerpoTabla.innerHTML = "";

            paisesAmerica.forEach((element)=>{
                //Creamos una fila
                let filaDinamica = document.createElement('tr');
                
                //Creamos las columnas
                let celdaPais = document.createElement('td');
                let celdaCapital = document.createElement('td');
                let celdaPoblacion = document.createElement('td');
                let celdaBtnZona = document.createElement('td');
                let btnDinamico = document.createElement('input');

                btnDinamico.type = "button";
                btnDinamico.value = "Ver zona Dinamica";

                btnDinamico.addEventListener('click',()=>{
                    alert(`El Pais elegido es: ${element.nombre} y es de la zona ${element.region}`)
                })

                celdaBtnZona.appendChild(btnDinamico);

                celdaPais.textContent = element.nombre;
                celdaCapital.textContent = element.capital;
                celdaPoblacion.textContent = element.poblacion;

                filaDinamica.appendChild(celdaPais);
                filaDinamica.appendChild(celdaCapital);
                filaDinamica.appendChild(celdaPoblacion);
                filaDinamica.appendChild(celdaBtnZona);


                idCuerpoTabla.appendChild(filaDinamica);
            })
        })



})
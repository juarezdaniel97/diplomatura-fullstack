import paisesAmerica from './datos.js';
//Importamos el array con los paises - utilizado en la Forma 4


window.addEventListener('load', ()=>{
    console.log("Funcionado..")
    console.log(paisesAmerica)

    const idBtn1 = document.querySelector("#idBtn1");
    const contendor1 = document.querySelector('#contendor1'); 

    console.log(idBtn1)
    console.log(contendor1)

    /*Forma 1: Generar Botones Dinámicos */

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


    /*Forma 2: Generar Botones Danámicos - Vector */

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




     /*Forma 3: Crear botones con un vector con objetos literales */
    
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








      /*Forma 4: Selector Dinámico de Paises */

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
})
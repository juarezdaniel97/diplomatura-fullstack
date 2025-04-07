import ejemplo01 from "./ejemplo01.js"
import ejemplo02 from "./ejemplo02.js"
import ejemplo03 from "./ejemplo03.js"
import ejemplo04 from "./ejemplo04.js"
import ejemplo05 from "./ejemplo05.js"

import {cubo, objetoLiteal} from "./ejemplo06.js"


window.addEventListener('load', ()=>{
    console.log(ejemplo01)
    console.log(ejemplo02)
    let resultado = ejemplo03(2);
    console.log(resultado);

    let resultado2 = ejemplo04(2);
    console.log(resultado2)

    console.log(ejemplo05);

    console.log(objetoLiteal);

    let resultado3 = cubo(7);
    console.log(resultado3)
})
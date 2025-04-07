console.log('Ejercicio N°4')


do {
    nota = Number(prompt("Ingrese la nota del alumno de la Diplomatura Full Stack: "))
    console.log(nota)

    console.log("Tipo:"+ typeof nota)

    funcionCompararNotas(nota);

    valorComparar = prompt("¿Desea seguir cargando Notas? si/no: ")
} while ("si" == valorComparar);


function funcionCompararNotas(nota) {

    if(validar(nota)){
        return true
    }

    if (nota>=0 && nota <=4) {
            alert("Trabajo Desaprobado.")
        }else{
            if(nota>4 && nota <=7){
                alert("Trabajos Aprobados.")
            }else{
                if(nota>7 && nota <=10){
                    alert("Trabajos Excelecnte.")
                }
            }
        }
}

function validar(nota) {
    if (nota < 0 ) {
        alert("Nota inválida, no puede ser menor a cero (0)");
        return true;
    }
    if(nota > 10){
        alert("Nota inválida, no puede ser mayor a diez (10)");
        return true;
    }

    if (isNaN(nota)) {
        alert("Nota inválida, no puede contener carcteres (a/z)")
    }
    return false
}

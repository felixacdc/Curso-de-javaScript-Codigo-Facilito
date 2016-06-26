/*
La sentencia let declara una variable de alcance local, la cual, opcionalmente, puede ser inicializada con algún valor.

var es un declaracion function scoping
let es una declaracion block scoping
*/

init_2();

function init_2() {

    var nombre = "Uriel";

    if(true) {
        let nombre = "Felix";
        console.log(nombre);
    }
    console.log(nombre);
}

init();

function init() {

    if(true) {
        let nombre = "Felix";
        var apellido = "Méndez";
    }

    console.log(apellido);
    console.log(nombre);
}


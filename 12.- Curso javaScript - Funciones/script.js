/*
Las funciones en javaScript son objetos
*/

function nombre_funcion () {
    // Codigo que se va a ejecutar al llamar a la funcion
}

function suma (a, b) {
    //asignar valor por default en ecmascript 5
    b = b || 0;
    return a + b;
}

var resultado = suma(2,4);

console.log(resultado);
/*
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

Parámetros

callback
Función que producirá un elemento del nuevo array, recibe tres argumentos:
currentValue
El elemento actual del array que se está procesando.
index
El índice del elemento actual dentro del array.
array
El array sobre el que se llama map.
thisArg
Opcional. Valor a usar como this al ejecutar callback.
*/

var numeros = [1, 5, 6, 8];

// Codigo sin map
// El ejemplo que se utilizara sera pasar los valores del array numero a su cuadrado correspondiente

var cuadrados = [];

/*for ( var i = numeros.length - 1; i >= 0; i-- ) {
    var numero = numeros[i];
    cuadrados.push(Math.pow(numero, 2));
}*/

// Codigo con map
cuadrados = numeros.map(function ( element ) {
    return Math.pow(element, 2);
});

console.log(cuadrados);
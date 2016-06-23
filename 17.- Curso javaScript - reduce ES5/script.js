/*
El método reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

Parámetros

funcion
Función a ejecutar para cada valor del array, que recibe cuatro parámetros:
valorAnterior
El valor retornado en la llamada anterior de la función, o el valorInicial, si se proveyó. (Ver a continuación.)
valorActual
Elemento actual que está siendo procesado en el array.
indiceActual
Índice el elemento actual que está siendo procesado en el array.
array
El array sobre el cual se llamó el método reduce.
valorInicial
Objeto a usar como primer argumento en la primera llamada de la funcion.

*/

var letras = ["H", "o", "l", "a"];

// En este caso el reduce funciona igual al join convierte un arreglo a un string
var palabra = letras.reduce(function (valorAnteriorRetornado, valorActual, index, arreglo) {
    return valorAnteriorRetornado + valorActual;
});

console.log(palabra);

// sumar los numeros de un arreglo
var numeros = [20, 1, 23, 1, 5];

var suma = numeros.reduce(function (valorAnteriorRetornado, valorActual, index, arreglo) {
    return valorAnteriorRetornado + valorActual;
});

/*
se puede asignar un valor predeterminado al valorAnteriorRetornado cuando se ejecuta por primera vez o es la primera iteracion
var suma = numeros.reduce(function (valorAnteriorRetornado, valorActual, index, arreglo) {
    return valorAnteriorRetornado + valorActual;
}, 5);

*/

console.log(suma);

// sin utilizar reduce

suma = 0;

for (var i = numeros.length - 1; i >= 0; i--) {
    suma += numeros[i];
}

console.log(suma);


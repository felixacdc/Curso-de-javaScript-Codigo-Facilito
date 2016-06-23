// ForEach es parecido a map con la diferencia de que no retorna un arreglo
var numeros = [1, 8, 7, 9, 15];

numeros.forEach(function ( element , index, arreglo ) {
    console.log(element);
    console.log(index);
    console.log(arreglo);
});

// Substituir los valores del arreglo por su cuadrado correspondiente
numeros.forEach(function ( element , index, arreglo ) {
    arreglo[index] = Math.pow(element, 2);
});

console.log(numeros);
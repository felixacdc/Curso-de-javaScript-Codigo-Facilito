// Formas de definicion
var arreglo = [20, 10, 5]; // forma recomendada
var arregloTwo = new Array();

console.log(arreglo[0]);
// cantidad de elementos
console.log(arreglo.length);

// permite agregar un elemento al final del arreglo
arreglo.push(7);

// permite agregar un elemento al principio del arreglo
arreglo.unshift(77);

console.log(arreglo);

// elimina el primer elemento del arreglo (inverso de unshift)
arreglo.shift();

// elimina el ultimo elemento del arreglo (inverso de push)
arreglo.pop();

console.log(arreglo);

// iterar arreglos
for( var i = 0; i < arreglo.length ; i++ ) {
    console.log(arreglo[i]);
}

// forma mas optima de iterar arreglos
var u = arreglo.length;

for ( ;u >= 0; u-- ) {
    console.log(arreglo[u]);
}
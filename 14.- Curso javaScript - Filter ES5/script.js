var array = [10, 2, 3, 5, 9, 20, 22, 8];

// filtrar los numero pares
// Sin Filter
/*var numeros_pares = [];

for ( var i = array.length; i >= 0; i-- ) {
    var numero = array[i];

    if ( numero % 2 == 0 ) {
        numeros_pares.push(numero);
    }
}*/

// Con Filter: recibe dos parametros la funcion el elemento y el index de ese elemento del arreglo
var numeros_pares = array.filter( function ( element ) {
    return element % 2 === 0;
});

console.log(numeros_pares);
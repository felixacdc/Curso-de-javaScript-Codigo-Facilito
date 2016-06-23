function ordenacion ( a, b ) {

    if ( a > b ) {
        return 1;
    } else if ( b > a ) {
        return -1;
    } else if ( a == b ) {
        return 0;
    }

}

var arreglo = [2, 5, 1, 10, 20];

// Ordena en orden alfavetico especialemnte para strins
// las funciones en javaScript se pueden pasar como parametros
arreglo.sort(ordenacion);

console.log(arreglo);

// Invierte el orden actual de un arreglo
arreglo.reverse();

console.log(arreglo);

// Convertir cadena a arreglo con split (el parametro es el caracter de separacion)
var arrayString = "a,b,c,2".split(",");

console.log(arrayString);

// Convertir un arreglo a una cadena (el parametro es el caracter de separacion)
arrayString = arrayString.join(",");

console.log(arrayString);
// Asignacion de valor utilizando comillas dobles
var nombre = "Felix";

// Asignacion de valor utilizando comillas simples
// Concatenacion
var cadena = 'Hola' + nombre;

console.log(cadena);

// Longitud de una cadena
console.log(cadena.length);

// Verificar si una cadena esta dentro de otra
var resultado = cadena.indexOf("Felix");

console.log(resultado);

if ( nombre.indexOf("Uriel") != -1) {
    console.log("Eres el tutor del curso");
} else {
    console.log("No eres el tutor del curso");
}

// Indices en una cadena
console.log(nombre[2]);

// Optener el caracter en alguna posicion
console.log(nombre.charAt(0));

// Remplazar caracteres en una cadena
nombre = nombre.replace("F", "B");
console.log(nombre);

// Acceder a un fragmento de la cadena el ultimo valor no lo toma en cuenta
console.log(nombre.slice(1,3));

// Pasar a mayusculas
console.log(nombre.toUpperCase());
// Pasar a minuscula
console.log(nombre.toLowerCase());
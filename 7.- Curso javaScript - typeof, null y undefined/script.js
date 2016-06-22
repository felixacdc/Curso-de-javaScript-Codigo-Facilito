// typeof permite averiguar el tipo de una variable
var number = 0;
var string = "hola";
var array = [];
var json = {};

console.log(typeof number);
console.log(typeof string);
console.log(typeof array);
console.log(typeof json);

// null indica la usencia de valor
// var hola = null;

// undefined es una variable global del sistema, se devuelve cuando una variable no esta definida
if( typeof hola == "undefined" ) {
    console.log("Esta variable no esta declarada");
}

if( null == undefined ) {
    console.log("Con doble igual somos lo mismo");
}

if( null === undefined ) {
    console.log("Con triple igual no somos lo mismo");
}

var nada = null;

if( nada == null ) {
    console.log("Estoy Vacia");
}
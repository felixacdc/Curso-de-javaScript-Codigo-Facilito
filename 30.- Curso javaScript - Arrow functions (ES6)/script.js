/*
La expresión de función flecha (también conocida como función flecha gruesa) dispone de una sintaxis más corta comparada con la expresión de función convencional y vincula contextualmente el valor de this. Las Funciones Flecha siempre son anónimas.
*/
var numeros = [1, 2, 3, 4, 5];

// sin arrow
var elevando_2 = numeros.map(function(n) { return n * n; });

// con arrow functions
var elevando_3 = numeros.map((n)=>{ return n * n; });
// cuando el contenido de la funcion es de una sola linea se pueden quitar la llaves y en ese caso no se utiliza return ya que automaticamente se recorna el valor
// var elevando_3 = numeros.map( n => n * n );

console.log(elevando_2);
console.log(elevando_3);

// no cambia el valor del nombre porque cada vez que se hace referencia a this dentro de otra funcion esta en un skout diferente por ende es otra variable 
/*function Tutor() {
    this.nombre = "Uriel";

    setTimeout(function() {
        console.log(":D");
        this.nombre = "Codigo Facilito";
    }, 500);
}

var tutor = new Tutor();

console.log(tutor.nombre);

setTimeout(function() {
    console.log(tutor.nombre);
}, 1000);*/

// Arreglar el problema en ES5
/*function Tutor() {
    this.nombre = "Uriel";
    var self = this;

    setTimeout(function() {
        self.nombre = "Codigo Facilito";
    }, 500);
}

var tutor = new Tutor();

console.log(tutor.nombre);

setTimeout(function() {
    console.log(tutor.nombre);
}, 1000);*/

// Arreglar el problema con ES5
// Con Arrow Functions se hereda el skout del padre
function Tutor() {
    this.nombre = "Uriel";

    setTimeout(() => {
        this.nombre = "Codigo Facilito";
    }, 500);
}

var tutor = new Tutor();

console.log(tutor.nombre);

setTimeout(function() {
    console.log(tutor.nombre);
}, 1000);
/*
JSON => JavaScript Object Notation
En otros lenguajes es el equivalente a 
Diccionarios / Hashes
*/

var arreglos = [1, 2, 3, 4];

// Json
var curso = {
    titulo: "Curso Javascript",
    videos: 19,
    tutor: "Uriel",
    introduccion : function () {
        console.log("Bienvenido al curso " + this.titulo + " que tiene " + this.videos);
    },
    otra_function: function () {
        return 10;
    }
};

console.log(curso["titulo"]);
console.log(curso["tutor"]);

console.log(curso.videos);
console.log(curso.introduccion());
console.log(curso.otra_function());
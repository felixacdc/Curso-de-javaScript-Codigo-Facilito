// DOM
// Seleccionar elementos por su id
var div = document.getElementById("mi_div");

// Agregar clase
div.classList.add("mi_clase");

// Seleccionar elementos por su clase
var divClass = document.getElementsByClassName("mi_clase");

console.log(divClass);

// Seleccionar elementos por su tipo
var divType = document.getElementsByTagName("div");

console.log(divType);

// Seleccionar elementos con Query Selector como en Jquery
// con querySelector solo devuelve un objeto el primero que encuentre
var mi_clase = document.querySelector(".mi_clase");
// con querySelectorAll devuelve todos los objetos
var mi_clase_all = document.querySelectorAll(".mi_clase");

console.log(mi_clase);
console.log(mi_clase_all);

// Clonar Jquery :P
function $( selector ) {
    return document.querySelectorAll(selector);
}

var mi_jquery = $(".mi_clase");

console.log(mi_jquery);
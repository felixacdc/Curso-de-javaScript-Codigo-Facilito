/*
Las plantillas de cadena de texto (template strings) son literales de texto que habilitan el uso de expresiones incrustadas. Es posible utilizar cadenas de texto de más de una línea, y funcionalidades de interpolación de cadenas de texto con ellas.
*/

// Reconoce enter y espacios en blanco
var template = `Hola
  puts :P
mundo`;

console.log(template);

var nombre = "Codigo Facilito";

var saludo = `Hola ${nombre} buen dia`;

console.log(saludo);

function suma() {
    return 2 + 3;
}

var resultado = `El resultado es ${suma()}`;

console.log(resultado);

// Tagged Template: separa las cadenas y los valores en un string template
// no funciona con mas de un valor :(
function tagged(cadenas, valores) {
    console.log(cadenas);
    console.log(valores);
}

tagged`Hola ${nombre} buen dia`;
var max = 100;
var min = 1;

// Numero aleatorio en un rango
var numero_secreto = Math.random() * (max - min ) + min;

// Comvertir numero a entero
numero_secreto = parseInt(numero_secreto);

console.log(numero_secreto);

var mensaje = "Ingresa un número para adivinar el numero magico";

while ( true ) {
    var numero_usuario = prompt(mensaje, "0");
    numero_usuario = parseInt(numero_usuario);

    if (numero_usuario == numero_secreto) {
        alert("Ganasteee!!!!");
        break;
    } else if ( numero_usuario === 0) {
        break;
    } else if ( numero_usuario > numero_secreto ) {
        mensaje = "El numero que ingresaste es mayor al numero magico";
    } else if ( numero_usuario < numero_secreto ) {
        mensaje = "El numero que ingresaste es menor al numero magico";
    }
}
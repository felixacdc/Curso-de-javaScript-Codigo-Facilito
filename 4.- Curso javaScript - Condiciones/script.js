if (true) {
    console.log("La condicion fue verdadera");
}

// negacion
if (!false) {
    console.log("La condicion fue verdadera");
}

var numero_uno = 22;

var numero_dos = 30;

if ( numero_dos > numero_uno) {
    console.log("Entre al bloque");
}

// verifica si la variable esta definido
if ( numero_uno) {
    console.log("Entre al bloque 2");   
}

// Operador and
if ( numero_dos && true ) {
    console.log("Entre al bloque 3");      
}

// Operador or
if ( numero_dos || false ) {
    console.log("Entre al bloque 4");
}

var numero_tres = 24;
var numero_cuatro = "24";

// Verifica si los valores son iguales
if ( numero_tres == numero_cuatro ) {
    console.log("Entre :D");
}

// Verifica si son exactamente tanto en su valor y su tipo
if ( numero_tres === numero_cuatro ) {
    console.log("Entre :D");
} else if (false) {
    console.log("Entre :D dos");
} else {
    console.log("Else Final");
}

// Representa al doble igual negado
if ( numero_tres != numero_cuatro ) {
    console.log("Entre :D");
}

// Representa al triple igual negado
if ( numero_tres !== numero_cuatro ) {
    console.log("Entre :D");
} 

/*Operadores Logicos*/
// || OR
// && AND
// == === IGUAL A
// != !== DIFERENTE A
// ! NEGACION
// < MENOR QUE
// > MAYOR QUE
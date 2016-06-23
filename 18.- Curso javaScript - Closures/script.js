/*
Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado.
*/

// A la creacion de funciones dentro de funciones se les llama Closures

(function () {

    document.getElementById('btn').addEventListener("click", function () {
        console.log("Hizo clic en mi");
    });

    setTimeout( function () {
        console.log(hola_mundo("Felix"));
    }, 5000);

})();

function hola_mundo (nombre) {

    function construct () {
        return "Hola " + nombre;
    }

    return construct();
    
}
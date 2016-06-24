// En ECMAScript 5 equivalente a clases se puede crear una funcion como esta o utilizar un Json
function Tutor (nombre, apellido) {

    this.nombre = nombre;

    this.saludar = function () {
        console.log("Hola a todos soy: " + nombre);
    }
    
    if ( typeof apellido !== "undefined") 
        this.nombre_completo = nombre + " " + apellido;
    else
        this.nombre_completo = "";
}

var primerTutor = new Tutor("Felix", "Méndez");

primerTutor.saludar();

console.log(primerTutor.nombre_completo);

var segundoTutor = new Tutor("Jose");

segundoTutor.saludar();

console.log(segundoTutor.nombre_completo);
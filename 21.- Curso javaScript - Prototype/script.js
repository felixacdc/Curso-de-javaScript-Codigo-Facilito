/* Descripción
Todos los objetos en JavaScript provienen de Object; todos los objetos heredan métodos y propiedades de Object.prototype, aunque pueden ser sobrecargados (excepto un Object con una propiedad null, p.e. Object.create(null)). Por ejemplo, otros prototipos de los constructores sobrecargan la propiedad del constructor y proporcionan su propio método toString(). Los cambios hechos al objeto prototipo Object se propagan a todos los objetos a menos que las propiedades y métodos sujetos a dichos cambios sean sobrecargados aún más a lo largo de la cadena del prototipo.*/
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

// Se puede crear atributos o mentodos despues de instancear el objeto, dichos atributos solo son validos para el objeto al que se esta signando
primerTutor.edad = 22;

console.log(primerTutor.edad)

var segundoTutor = new Tutor("Jose");

console.log(segundoTutor.edad);

// Al agregar atributos al prototipo de un objeto se le agrega a todos los objetos hijos
Tutor.prototype.edad = 23;
Tutor.prototype.iniciarTutorial = function () {
    console.log("Bienvenidos a este nuevo tutorial");
}

console.log(primerTutor.edad)
console.log(segundoTutor.edad);

primerTutor.iniciarTutorial();
segundoTutor.iniciarTutorial();

console.log(primerTutor.prototype);
// ver el prototipo de un objeto en Chrome, el prototipo hace referencia al padre del objeto
console.log(primerTutor.__proto__);
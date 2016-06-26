class Human {

}

class Tutor extends Human{
    constructor(nombre, last_name) {
        super();
        this.nombre = nombre;
        this.last_name = last_name;
    }

    full_name() {
        return this.nombre + " " + this.last_name;
    }
}

var tutor = new Tutor("Uriel", "Hernández");

console.log(tutor.full_name());
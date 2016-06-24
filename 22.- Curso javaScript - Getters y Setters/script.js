// Json antes de EcmaScript 5
/*var curso = {
    titulo: "Curso Javascript",
    videos: 19,
    tutor: "Uriel",
    getTutor: function () {
        return this.tutor.toUpperCase();
    },
    setTutor: function (tutor) {
        if ( tutor === "" || (typeof tutor === "undefined") ) { return; }
        this.tutor = tutor;
    }
};

console.log(curso.getTutor());

curso.setTutor("Felix");

console.log(curso.getTutor());

*/

// Con EcmaScript 5
var curso = {
    titulo: "Curso Javascript",
    videos: 19,
    tutor_value: "Uriel",
    get tutor() {
        return this.tutor_value.toUpperCase();
    },
    set tutor(tutor) {
        if ( tutor === "" || (typeof tutor === "undefined") ) { return; }
        this.tutor_value = tutor;
    }
};

curso.tutor = "juancho";
console.log(curso.tutor);
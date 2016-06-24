// Funcion anonima que se ejecuta a si misma para no contaminar el skouk general del proyecto
(function() {
    // Declarar la clase para el pisarron del juego
    // el self es para posicionarse sobre la ventana en curso.
    self.Board = function(width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }

    // Agregar metodos por prototipo (los metodos se agregaran por medio de un Json)
    self.Board.prototype = {
        get elements() {
            var elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }

})();

(function() {
    self.BoardView = function(canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        // Contexto del canvas
        this.ctx = canvas.getContext("2d");
    }
})();

window.addEventListener("load", main);

function main() {
    var board = new Board(800, 400);
    var canvas = document.getElementById("canvas");
    var board_view = new BoardView(canvas, board);
}
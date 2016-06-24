// Funcion anonima que se ejecuta a si misma para no contaminar el skouk general del proyecto
// Modelo
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
            elements.push(this.ball);
            return elements;
        }
    }

})();

// Este tipo de funciones se auto ejecutan y sirven para crear clases
(function() {

})();

(function() {
    self.Bar = function (x, y, width, height, board) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;

        // Agregar la barra al board
        this.board.bars.push(this);

        // Establecer la figura de la barra en este caso un rectangulo
        this.kind = "rectangle";        
    }

    self.Bar.prototype = {
        down: function() {

        },
        up: function() {

        }
    }
})();

// vista

(function() {
    self.BoardView = function(canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        // Contexto del canvas
        this.ctx = canvas.getContext("2d");
    }

    self.BoardView.prototype = {
        draw: function() {
            for (var i = this.board.elements.length -1; i >= 0; i--) {
                var element = this.board.elements[i];

                draw(this.ctx, element);
            }
        }
    }

    // Helper Method
    function draw(ctx, element) {

        // hasOwnProperty: verifica si mi objeto tiene una propiedad determinada en este caso kind

        if ( element !== null && element.hasOwnProperty("kind")) {

            switch(element.kind) {
                case "rectangle":
                    // permite dibujar un cuadrado en canvas
                    ctx.fillRect(element.x, element.y, element.width, element.height);
                    break;
            }
            
        }

    }
})();

window.addEventListener("load", main);

function main() {
    var board = new Board(800, 400);
    var bar = new Bar(20, 100, 40, 100, board);
    var bar = new Bar(735, 100, 40, 100, board);
    var canvas = document.getElementById("canvas");
    var board_view = new BoardView(canvas, board);

    board_view.draw();
}
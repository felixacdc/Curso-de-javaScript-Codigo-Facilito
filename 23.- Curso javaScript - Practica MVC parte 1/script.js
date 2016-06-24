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
    self.Ball = function(x, y, radius, board) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed_y = 0;
        this.speed_x = 3;
        this.board = board;

        board.ball = this;
        this.kind = "circle";
    }
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
        // Velocidad de las barras
        this.speed = 10;
    }

    self.Bar.prototype = {
        down: function() {
            this.y += this.speed;
        },
        up: function() {
            this.y -= this.speed;
        },
        // Se utiliza para cuando imprimamos el objeto como string devuelva lo definido en la funcion toString
        toString: function() {
            return "x: " + this.x + "y: " + this.y;
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
        clean: function() {
            this.ctx.clearRect(0, 0, this.board.width, this.board.height);
        },
        draw: function() {
            for (var i = this.board.elements.length -1; i >= 0; i--) {
                var element = this.board.elements[i];

                draw(this.ctx, element);
            }
        },
        play: function() {
            this.clean();
            this.draw();
        }
    }

    // Helper Method
    function draw(ctx, element) {

        // hasOwnProperty: verifica si mi objeto tiene una propiedad determinada en este caso kind

        // if ( element !== null && element.hasOwnProperty("kind")) {

            switch(element.kind) {
                case "rectangle":
                    // permite dibujar un cuadrado en canvas
                    ctx.fillRect(element.x, element.y, element.width, element.height);
                    break;
                case "circle":
                    ctx.beginPath();
                    // los valor 0 y 7 son necesarios para formar el circulo 
                    ctx.arc(element.x, element.y, element.radius, 0, 7);
                    ctx.fill();
                    ctx.closePath();
                    break;
            }
            
        // }

    }
})();

var board = new Board(800, 400);
var bar = new Bar(20, 100, 40, 100, board);
var bar_2 = new Bar(735, 100, 40, 100, board);
var canvas = document.getElementById("canvas");
var board_view = new BoardView(canvas, board);
var ball = new Ball(350, 100, 10, board);

document.addEventListener("keydown", function(ev) {

    ev.preventDefault();
    if( ev.keyCode == 38 ) {
        bar.up();
    } else if( ev.keyCode == 40 ) {
        bar.down();
    } else if( ev.keyCode === 87 ) {
        bar_2.up();
    } else if( ev.keyCode === 83 ) {
        bar_2.down();
    } 

});

/*
window.requestAnimationFrame informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
*/
window.requestAnimationFrame(controller);

function controller() {
    board_view.play();
    window.requestAnimationFrame(controller);
}
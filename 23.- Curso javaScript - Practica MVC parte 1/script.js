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
        this.playing = false;
    }

    // Agregar metodos por prototipo (los metodos se agregaran por medio de un Json)
    self.Board.prototype = {
        get elements() {
            // Para que no consuma mucha memoria no se iguala elements a this.bars ya que esta asignacion es por referencia es decir que cualquier cambio que se haga en elements se hace en this.bars, por tanto se crea una copia del arreglo con map, map itera los componentes de un array y debuelve un array nuevo como resultado
            var elements = this.bars.map(function(bar) { return bar; });
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
        this.direction = 1;

        board.ball = this;
        this.kind = "circle";
    }

    self.Ball.prototype = {
        move: function() {
            this.x += (this.speed_x * this.direction);
            this.y += (this.speed_y);
        }
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
                var el = this.board.elements[i];

                draw(this.ctx, el);
            }
        },
        play: function() {
            if ( this.board.playing ) {
                this.clean();
                this.draw();
                this.board.ball.move();
            }
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

    
    if( ev.keyCode == 38 ) {
        ev.preventDefault();
        bar.up();
    } else if( ev.keyCode == 40 ) {
        ev.preventDefault();
        bar.down();
    } else if( ev.keyCode === 87 ) {
        ev.preventDefault();
        // W
        bar_2.up();
    } else if( ev.keyCode === 83 ) {
        ev.preventDefault();
        // S
        bar_2.down();
    } else if( ev.keyCode === 32 ) {
        ev.preventDefault();
        board.playing = !board.playing;
    }

});

board_view.draw();
/*
window.requestAnimationFrame informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
*/
window.requestAnimationFrame(controller);
setTimeout(function() {
    ball.direction = -1;
}, 3000);

function controller() {
    board_view.play();
    window.requestAnimationFrame(controller);
}
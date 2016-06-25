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
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI / 12;
        this.speed = 3;

        board.ball = this;
        this.kind = "circle";
    }

    self.Ball.prototype = {
        move: function() {
            this.x += (this.speed_x * this.direction);
            this.y += (this.speed_y);
        },
        get width() {
            return this.radius * 2;
        },
        get height() {
            return this.radius * 2;
        },
        collision: function(bar) {
            // Reacciona con una colision con una barra que recibe como parametro
            var relative_intersect_y = ( bar.y + (bar.height / 2) ) - this.y;

            var normalized_intersect_y = relative_intersect_y / (bar.height / 2);

            this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;
            console.log(this.bounce_angle);
            this.speed_y = this.speed * -Math.sin(this.bounce_angle);
            this.speed_x = this.speed * Math.cos(this.bounce_angle);

            if (this.x > (this.board.width / 2)) 
                this.direction = -1;
            else 
                this.direction = 1;
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
        check_collisions: function() {
            for (var i = this.board.bars.length - 1; i >= 0; i--) {
                var bar = this.board.bars[i];
                if ( hit(bar, this.board.ball) ) {
                    this.board.ball.collision(bar);
                }
            }
        },
        play: function() {
            if ( this.board.playing ) {
                this.clean();
                this.draw();
                this.check_collisions();
                this.board.ball.move();
            }
        }
    }

    function hit(a, b) {
        console.log("hit");
        // revisa si a coliciona con b
        var hit = false;
        // Colisiones horizontales
        if ( b.x + b.width >= a.x && b.x < a.x + a.width ) {
            // Colisiones verticales
            if ( b.y + b.height >= a.y && b.y < a.y + a.height ) {
                hit = true;
            }
        }

        // Colision de a con b
        if( b.x <= a.x && b.x + b.width >= a.x + a.width ) {
            if ( b.y <= a.y && b.y + b.height >= a.y + a.height )
                hit = true; 
        }

        // Colision de b con a
        if ( a.x <= b.x && a.x + a.width >= b.x + b.width ) {
            if ( a.y <= b.y && a.y + a.height >= b.y + b.height )
                hit = true; 
        }

        return hit;
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

function controller() {
    board_view.play();
    window.requestAnimationFrame(controller);
}
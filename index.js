var canvas;
var ctx;
var FPS = 50

var img;


function initialize() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    img = new Image();
    img.src = "img/persona.png"



    setInterval(function () {
        principal()
    }, 1000 / FPS)
}


var protagonista = function (x, y) {
    this.x = x;
    this.y = y;
    this.speed = 3;

    this.dibuja = function () {
        ctx.drawImage(img, this.x, this.y);
    }


    this.texto = function(){
        ctx.font='30px impact';
        ctx.fillStyle = "#555555";
        ctx.fillText('X:' + this.x,100,100)
    }


    this.up = function(){
        this.y-= this.speed;
    }
    this.down = function(){
        this.y+= this.speed;
    }
    this.left = function(){
        this.x-= this.speed;
    }
    this.right = function(){
        this.x+= this.speed;
    }
}

var personaje = function (x, y) {
    this.x = x;
    this.y = y;
    this.right = true;

    this.dibuja = function () {
        ctx.fillStyle = "#f00";
        ctx.fillRect(this.x, this.y, 50, 50)
    }

    

    this.move = function (speed) {
        if (this.right == true) {
            if (this.x < 400) {
                this.x += speed;
            } else {
                this.right = false
            }

        } else {
            if (this.x > 50) {
                this.x -= speed;
            } else {
                this.right = true;
            }
        }

    }
}

var pro = new protagonista(40, 60);

document.addEventListener('keydown', function (e) {
    console.log('e.keyCode', e.keyCode);
    const { keyCode } = e
    //Ariba
    if (keyCode === 38) {
        pro.up()
    }
    //Abajo
    if (keyCode === 40) {
        pro.down()
    }

    //Izquierda
    if (keyCode === 37) {
        pro.left()
    }
    //Derecha
    if (keyCode === 39) {
        pro.right()
    }
})


var per1 = new personaje(10, 50);
var per2 = new personaje(20, 150);
var per3 = new personaje(30, 300);

function borrarCanvas() {
    canvas.width = 500;
    canvas.height = 400;
}


function principal() {
    borrarCanvas()
    per1.dibuja()

    per1.move(2)

    per2.dibuja()
    per2.move(4)

    per3.dibuja()
    per3.move(7)

    pro.dibuja()
    pro.texto()


    //console.log('function main')
}





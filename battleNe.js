const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 300;

ctx.fillStyle = '#333';

function drawNe(neko) {
//   ctx.beginPath();
  ctx.fillStyle = neko.color;
  ctx.fillRect(neko.x, neko.y, neko.width, neko.height);
//   ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    neneneko.forEach(neko => {
        drawNe(neko);
        neko.x += neko.dx;
    })
}

setInterval(draw, 10);

class Ne {
    constructor(width, height, speed, color) {
        this.width = width;
        this.height = height;
        this.x = 900 - width;
        this.y = 300 - height;
        this.dx = -speed;
        this.color = color;
        // this.hp = hp;
    }
}

var neneneko = [];
var neko1 = new Ne(40, 40, 1, 'brown');
neneneko.push(neko1);
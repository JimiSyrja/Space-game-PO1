balls = [];

function setup() {
  createCanvas(720, 400);

//laat de asteroids random aantallen spawnen
  for(var i = 0; i < 30; i++){
    let randomY = Math.floor(Math.random() * 300);
    let randomX = Math.floor(Math.random() * 700);
    let randomV = Math.floor(Math.random() * 7) + 1;
    balls.push(new Ball(randomX,randomY,10,10,randomV,0,"red"));
  }
}

function display() {
    // Spawnt de speler
    rect(this.xpos, this.ypos, this.playerHeight, this.playerWidth);
  }

function draw() {
	background(bg);  

  balls.forEach(b => {
    b.draw();
  }
)}



function preload(){
  bg = loadImage('img/background.jpg');
}
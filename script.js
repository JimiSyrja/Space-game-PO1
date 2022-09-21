var balls = [];
var ship;

function setup() {
  createCanvas(720, 400);

  ship = new Player();

//laat de asteroids random aantallen spawnen
  for(var i = 0; i < 70; i++){
    let randomY = Math.floor(Math.random() * 300);
    let randomX = Math.floor(Math.random() * 700);
    let randomVx = Math.floor(Math.random() * 5) + 1;
    //let randomVy = Math.floor(Math.random() * 5) + 1;
    balls.push(new Ball(randomX,randomY,10,10,randomVx,0,"red"));
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
  });
  
  ship.draw();
  ship.move();
}



function preload(){
  bg = loadImage('img/background.jpg');
}
var balls = [];
var ship;
var score = 0;

function setup() {
  createCanvas(425, 550);

  ship = new Player();

//laat de asteroids random aantallen spawnen
  for(var i = 0; i < 40; i++){
    let randomY = Math.floor(Math.random() * 400);
    let randomX = Math.floor(Math.random() * 425);
    let randomVx = Math.floor(Math.random() * 4) + 1;
    //let randomVy = Math.floor(Math.random() * 5) + 1;
    balls.push(new Ball(randomX,randomY,10,10,randomVx,0,"red"));
  }
}

function display() {
    // Spawnt de speler
    rect(this.xpos, this.ypos, this.playerHeight, this.playerWidth);


    fill(255,255,255);
    textSize(5);
    textAlign(LEFT);
    text('Score: '+ score, 350,330);
  }

function menu() {
  background(bg);
  text("MENU", 25, 45);
  text("1. menu", 25, 65);
  text("2. start game", 25, 85);
  text("3. game over", 25, 105);
}

function draw() {
	background(bg);  
  
  
  balls.forEach(b => {
    b.draw();
    b.checkCollision();
  });
  
  ship.draw();
  ship.move();
}



function preload(){
  bg = loadImage('img/background1.jpg');
  img1 = loadImage('img/SpaceShip1.webp');
  img2 = loadImage('img/BlueBird.png');
}
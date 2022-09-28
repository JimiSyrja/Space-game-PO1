var balls = [];
var ship;
var ship2;
var score = 0;
var score2 = 0;

function setup() {
  createCanvas(440, 550);

  ship = new Player();
  ship2 = new Player2();

//laat de asteroids random aantallen spawnen
  for(var i = 0; i < 10; i++){
    let randomY = Math.floor(Math.random() * 400);
    let randomX = Math.floor(Math.random() * 425);
    let randomVx = Math.floor(Math.random() * 3) + 1;
    //let randomVy = Math.floor(Math.random() * 5) + 1;
    balls.push(new Ball(randomX,randomY,10,10,randomVx,0,"red"));
  }
}

//function display() {
    // Spawnt de speler
    //rect(this.xpos, this.ypos, this.playerHeight, this.playerWidth);


//}

function menu() {
  background(bg);
  text("MENU", 25, 45);
  text("1. menu", 25, 65);
  text("2. start game", 25, 85);
  text("3. game over", 25, 105);
}

function draw() {
	background(bg);  
  
  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player I : '+ score, width/4,520);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player II : '+ score, 335,520);
  
  balls.forEach(b => {
    b.draw();
    b.checkCollision();
  });
  
  ship.draw();
  ship.move();
  ship2.draw();
  ship2.move();
}


function preload(){
  bg = loadImage('img/background1.jpg');
  img1 = loadImage('img/SpaceShip1.webp');
  img2 = loadImage('img/BlueBird.png');
  img3 = loadImage('img/SpaceShip2.webp');

  
}
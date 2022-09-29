var balls = [];
var ship;
var ship2;
var score = 0;
var score2 = 0;

var timer = 15;

var gameState = 0;


function setup() {
  createCanvas(440, 550);

  ship = new Player();
  ship2 = new Player2();

//laat de asteroids random aantallen spawnen
  for(var i = 0; i < 40; i++){
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

function draw() {
 if (gameState == 0){
   menu();
 }
  
   if (gameState == 1){
   game();
     
 } if (gameState == 2){
   win();
     
 } if (gameState == 3){
   gameOver();
 }
}

function game() {
	background(bg);  

  drawUi();
  
  balls.forEach(b => {
    b.draw();
    b.checkCollision();
  });
  
  ship.draw();
  ship.move();
  ship2.draw();
  ship2.move();
}

function menu(){
 background (img4)

  fill(4, 44, 220 );
  textSize(60);
  textFont('impact');
  textAlign(CENTER);
  text('Space Race', 220,100);

  fill(255,255,255);
  textSize(23);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Press Enter To Play The Game', 220,520);

 if (keyCode == 13){
  gameState = 1
 }
  
}//close menu

function gameOver(){
  background(img5)

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player I : '+ score, width/4,520);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player II : '+ score2, 335,520);
}

function drawUi(){
    
  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player I : '+ score, width/4,520);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player II : '+ score2, 335,520);


  fill(255,255,255);
  textSize(20);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('TIME: '+ timer + ' s', 220,100);

  if(frameCount % 60 == 0){
    timer -= 1;
  }

  if ( timer <= 0){
    gameState = 3;
  }
}

function preload(){
  bg = loadImage('img/background1.jpg');
  img1 = loadImage('img/SpaceShip1.webp');
  img2 = loadImage('img/BlueBird.png');
  img3 = loadImage('img/SpaceShip2.webp');
  img4 = loadImage('img/Menu.jpg');
  img5 = loadImage('img/GameOver.jpeg');
}
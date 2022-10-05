var balls = [];
var ship;
var ship2;
var score = 0;
var score2 = 0;
var timer = 5;
var gameState = 0;

function setup() {
  createCanvas(650, 800);

  ship = new Player();
  ship2 = new Player2();
newBallsPlease()

  textAlign(CENTER);
}

function newBallsPlease(){
  //laat de asteroids random aantallen spawnen
  for(var i = 0; i < 50; i++){
    let randomY = Math.floor(Math.random() * 650);
    let randomX = Math.floor(Math.random() * 600);    
    let randomVx = Math.floor(Math.random() * 3) + 1;
    if(Math.random() > 0.5){
      randomVx *= -1;
    }  
    
    //let randomVy = Math.floor(Math.random() * 5) + 1;
    balls.push(new Ball(randomX,randomY,10,10,randomVx,0,"red"));
  }
}

function draw() {
  if(gameState == 0){
    menu();
  } else if(gameState == 1){
    game();
  }else if(gameState == 2){
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
  ship2.checkCollision();
}

function menu(){
 background (img4)
  
  fill(4, 44, 220 );
  textSize(60);
  textFont('Audiowide,bolder');
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
    gameState = 2;
    timer = 5;
  }
}


function gameOver(){
  background(img5)

  if (score > score2){
    text("Player 1 heeft gewonnen!!!",  220,420)
  }
  else if(score2 > score){
    text("Player 2 heeft gewonnen!!!",  220,420)
  }
  else if(score == score2){
    text("draw!!!", 220,420)
  }
  fill(255,255,255 );
  textSize(60);
  textFont('Audiowide,bolder');

  text('Game Over', 220,200);

  fill(255,255,255 );
  textSize(30);
  textFont('Audiowide,bolder');
  text('Press 0 To Play Again', 220,300);

  
  // 0
  if (keyCode == 48){
    gameState = 0
    score = 0;
    score2 = 0;
    balls = [];
    newBallsPlease();
    //setup();
  }
  
  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  text('Player I : '+ score, width/4,520);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  text('Player II : '+ score2, 335,520);

}



function preload(){
  bg = loadImage('img/background1.jpg');
  img1 = loadImage('img/SpaceShip1.webp');
  img2 = loadImage('img/BlueBird.png');
  img3 = loadImage('img/SpaceShip2.webp');
  img4 = loadImage('img/Astronaut.jpg');
  img5 = loadImage('img/GameOver.jpeg');
}
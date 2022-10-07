var balls = [];
var ship;
var ship2;
var score = 0;
var score2 = 0;
var timer = 30;
var gameState = 0;

function setup() {
  createCanvas(1200, 850);

  ship = new Player();
  ship2 = new Player2();
newBallsPlease()

  textAlign(CENTER);
}

function newBallsPlease(){
  //laat de asteroids random aantallen spawnen
  for(var i = 0; i < 100; i++){
    let randomY = Math.floor(Math.random() * 675);
    let randomX = Math.floor(Math.random() * 1200);    
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
  } else if(gameState == 2){
    game();
  } else if(gameState == 3){
    game();
  }else if(gameState == 4){
    gameOver();
  }
}

function game() {
	background(bg);  

  if(gameState == 1){
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
  if(gameState == 2){
     drawUi1();
  }
  if(gameState == 3){
    drawUi2();
  }
  
  
  
}

function menu(){
 background (img4)
  
  fill(4, 44, 220 );
  textSize(60);
  textFont('Audiowide,bolder');
  textAlign(CENTER);
  text('Space Games', 600,200);

  fill(255,255,255);
  textSize(23);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Press 1 for Space Race', 600,250);
  text('Press 2 for Space Dodge', 600,300);
  text('Press 3 for Space Maze', 600,350 );

 if (keyCode == 49){ 
  gameState = 1
 }
 if(keyCode == 50){
   gameState = 2
 }
 if(keyCode == 51){
   gameState = 3
 }
  
}//close menu

function drawUi(){
    
  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player I : '+ score, width/4,825);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player II : '+ score2, 900,825);


  fill(255,255,255);
  textSize(20);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('TIME: '+ timer + ' s', width/2,100);

  if(frameCount % 60 == 0){
    timer -= 1;
  }

  if ( timer <= 0){
    gameState = 4;
    timer = 30;
  }
}

function drawUi1(){
    
  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player I : '+ score, width/4,825);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player II : '+ score2, 900,825);


  fill(255,255,255);
  textSize(20);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('TIME: '+ timer + ' s', width/2,100);

  if(frameCount % 60 == 0){
    timer -= 1;
  }

  if ( timer <= 0){
    gameState = 4;
    timer = 30;
  }
}

function drawUi2(){
    
  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player I : '+ score, width/4,825);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player II : '+ score2, 900,825);


  fill(255,255,255);
  textSize(20);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('TIME: '+ timer + ' s', width/2,100);

  if(frameCount % 60 == 0){
    timer -= 1;
  }

  if ( timer <= 0){
    gameState = 4;
    timer = 30;
  }
}


function gameOver(){
  background(img5)
  
  if (score > score2){
    fill(213, 28, 28)
    textSize(20);
    textFont("Prismatic")
    text("Player 1 heeft gewonnen!!!",  width/2,550)
  }
  else if(score2 > score){
    fill(213, 28, 28)
    textSize(20);
    textFont("Prismatic")
    text("Player 2 heeft gewonnen!!!",  width/2,550)
  }
  else if(score == score2){
    fill(213, 28, 28)
    textSize(30);
    textFont("PIXELFONT")
    text("draw!!!", width/2,550)
  }
  

  fill(255,255,255 );
  textSize(30);
  textFont('Audiowide,bolder');
  text('Press 0 To Play Again', width/2,675);

  
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
  text('Player I : '+ score, 750,610);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  text('Player II : '+ score2, 450,610);

}



function preload(){
  bg = loadImage('img/background1.jpg');
  img1 = loadImage('img/SpaceShip1.webp');
  img2 = loadImage('img/BlueBird.png');
  img3 = loadImage('img/SpaceShip2.webp');
  img4 = loadImage('img/Astronaut.jpg');
  img5 = loadImage('img/GameOver.jpg');
}
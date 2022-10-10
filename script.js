var balls = [];
var ship;
var ship2;
var player3;
var player4;
var score = 0;
var score2 = 0;
var timer = 30;
var gameState = 0;
var start, current;
let gif;

var shipImage;
var shipImage2;
var bulletImage;
var bulletImage2;
var ship3;
var ship4;
var bullets;
var bullets2;


var MARGIN = 40;
var SHIP_NORMAL = 'normal';
var SHIP_THRUST = 'thrust';

var SHIP_NORMAL2 = 'normal';
var SHIP_THRUST2 = 'thrust';


function setup() {
  createCanvas(1200, 725);

  ship = new Player();
  ship2 = new Player2();
  player3 = new Player3();
  player4 = new Player4();
  
  newBallsPlease()

  textAlign(CENTER);
}

function newBallsPlease(){
  //laat de asteroids random aantallen spawnen
  for(var i = 0; i < 100; i++){
    let randomY = Math.floor(Math.random() * 625);
    let randomX = Math.floor(Math.random() * 1200);       //let randomR = Math.floor(Math.random() * 30) + 15;
    let randomVx = Math.floor(Math.random() * 3) + 1;
    if(Math.random() > 0.5){
      randomVx *= -1;
    }  
    
    //let randomVy = Math.floor(Math.random() * 5) + 1;
    balls.push(new Ball(randomX,randomY,20,20,randomVx,0,"red"));
  }

  ship3 = createSprite(width / 4, height / 2);
  ship3.maxSpeed = 6;
  ship3.friction = 0.01;
  ship3.addImage(SHIP_NORMAL, shipImage);
  ship3.addAnimation(SHIP_THRUST, 'assets/asteroids_ship0002.png', 'assets/asteroids_ship0007.png');

  ship4 = createSprite(900, height / 2);
  ship4.maxSpeed = 6;
  ship4.friction = 0.01;
  ship4.addImage(SHIP_NORMAL2, shipImage2);
  ship4.addAnimation(SHIP_THRUST2, 'assets/asteroids_ship0003.png', 'assets/asteroids_ship0006.png');


  bullets = new Group();
  bullets2 = new Group();
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
	  

  //Space Race
  if(gameState == 1){
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

  //Space Evade
  if(gameState == 2){
    background(img7);
    drawUi1();

  if(frameCount % 5 == 0){
    // spawn!
    meteors.push(new Meteor());
  }

  meteors.forEach((m) => {
    m.draw();
    m.checkCollision();
  });

  player3.draw();
  player3.move();
  player4.draw();
  player4.move();
  }
  
  //Space Maze
  if(gameState == 3){
    background(img8);
    drawUi2();
  }
  
  
  
}

function menu(){
 background (gif)
  
  fill(4, 44, 220 );
  textSize(60);
  textFont('Audiowide,bolder');
  textAlign(CENTER);
  text('Space Games', width/4,250);

  fill(255,255,255);
  textSize(25);
  textFont('CASTELLAR');
  textAlign(LEFT);
  text('1 - Space Race', 150,350);
  text('2 - Space Evade', 150,400);
  text('3 - Space Fire', 150,450 );

 if (keyCode == 49){ 
  gameState = 1
 }
 if(keyCode == 50){
   gameState = 2
 }
 if(keyCode == 51){
   gameState = 3
 }
  
}

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
  for (var i = 0; i < allSprites.length; i++) {
    var sprite = allSprites[i];
    if (sprite.position.x < -MARGIN) {
      sprite.position.x = width+MARGIN;
    }
    if (sprite.position.x > width + MARGIN) {
      sprite.position.x = -MARGIN;
    }
    if (sprite.position.y < -MARGIN) {
      sprite.position.y = height + MARGIN;
    }
    if (sprite.position.y > height + MARGIN) {
      sprite.position.y = -MARGIN;
    }
  }

  
  if (keyDown(LEFT_ARROW)) {
    ship3.rotation -= 4;
  }
  if (keyDown(RIGHT_ARROW)) {
    ship3.rotation += 4;
  }

  if (keyDown(UP_ARROW)) {
    ship3.addSpeed(0.2, ship3.rotation);
    ship3.changeAnimation(SHIP_THRUST);
  } else {
    ship3.changeAnimation(SHIP_NORMAL);
  }

  if (keyWentDown('Enter')) {
    var bullet = createSprite(ship3.position.x, ship3.position.y);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10 + ship3.getSpeed(), ship3.rotation);
    bullet.life = 30;
    bullets.add(bullet);
  }


    
    if (keyDown(65)) {
    ship4.rotation -= 4;
  }
  if (keyDown(68)) {
    ship4.rotation += 4;
  }

  if (keyDown(87)) {
    ship4.addSpeed(0.2, ship4.rotation);
    ship4.changeAnimation(SHIP_THRUST2);
  } else {
    ship4.changeAnimation(SHIP_NORMAL2);
  }

  if (keyWentDown('Space')) {
    var bullet2 = createSprite(ship4.position.x, ship4.position.y);
    bullet2.addImage(bulletImage2);
    bullet2.setSpeed(10 + ship4.getSpeed(), ship4.rotation);
    bullet2.life = 30;
    bullets2.add(bullet2);
  }

  drawSprites();
  
  fill(255);
  textAlign(CENTER);
  textSize(40); 
  text('Controls: Arrows + Ctrl', 600, 100);
  text('Controls: WASD + Space', 600, 150);
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
  text('Press 0 To go to menu', width/2,675);
  text('Press enter to play again', width/2, 625)

  
  // 0
  if (keyCode == 48){
    gameState = 0
    score = 0;
    score2 = 0;
    balls = [];
    newBallsPlease();
    //setup();
  }
  if (keyCode == 13){
    gameState = 1
    score = 0;
    score2 = 0;
    balls = [];
    newBallsPlease();
  }
  
  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  text('Player I : '+ score, 450,610);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  text('Player II : '+ score2, 750,610);

}

function wait(time){
  start = millis()
  do
  {
    current = millis();
  }
  while(current < start + time)
}

function preload(){
  bg = loadImage('img/background1.jpg');
  img1 = loadImage('img/SpaceShip1.webp');
  img2 = loadImage('img/Meteor.png');
  img3 = loadImage('img/SpaceShip2.webp');
  img4 = loadImage('img/Astronaut.jpg');
  img5 = loadImage('img/GameOver.jpg');
  img6 = loadImage('img/BlueBird.png');
  img7 = loadImage('img/Background2.jpg');
  img8 = loadImage('img/Background3.jpg');
  shipImage = loadImage('assets/asteroids_ship0001.png');
  bulletImage = loadImage('assets/asteroids_bullet.png');
  shipImage2 = loadImage('assets/asteroids_ship0001.png');
  bulletImage2 = loadImage('assets/asteroids_bullet.png');

  gif = loadImage('assets/Moon.gif');
  gif1 = loadImage('assets/explosion.gif');

 // font1 = loadFont('fonts/joystix.zip');
  //myFont = loadFont('joystix.zip');
}
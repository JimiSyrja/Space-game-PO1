var balls = [];
var ship;
var ship2;
var lives = 3;
var lives3 = 5;
var lives4 = 5;
var score = 0;
var score2 = 0;
var timer = 15;
var gameState = 0;
var meteors = [];
var meteors2 = [];
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
  
    newBallsPlease()

    textAlign(CENTER);
}

function newBallsPlease(){
  //laat de asteroids random aantallen spawnen
    for(var i = 0; i < 100; i++){
    let randomY = Math.floor(Math.random() * 615);
    let randomX = Math.floor(Math.random() * 1200);       //let randomR = Math.floor(Math.random() * 30) + 15;
    let randomVx = Math.floor(Math.random() * 3) + 1;
    if(Math.random() > 0.5){
      randomVx *= -1;
    }  
    
    //let randomVy = Math.floor(Math.random() * 5) + 1;
    balls.push(new             Ball(randomX,randomY,20,20,randomVx,0,"red"));
    }

        ship3 = createSprite(900, height / 2);
        ship3.maxSpeed = 6;
        ship3.friction = 0.01;
        ship3.addImage(SHIP_NORMAL, shipImage);
        ship3.addAnimation(SHIP_THRUST,                 'assets/asteroids_ship0002.png', 'assets/asteroids_ship0007.png');

        ship4 = createSprite(width / 4, height / 2);
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
    game1(); 
  } else if(gameState == 2){
    game2();
  } else if(gameState == 3){
    game3();
  }else if(gameState == 4){
    gameOver();
  }
}

function game1(){
  
  background(img5);
  drawUi();
    
  balls.forEach(b => {
  b.draw();
  b.checkCollision();
   });

  
  ship.draw();
  ship.moveShip1();
  ship2.draw();
  ship2.moveShip2();
  ship2.checkCollision();

  if (keyCode == 27){
    gameState = 0
    score = 0;
    score2 = 0;
    balls = [];
    newBallsPlease();
  }   
}

function game2() {
  //Space Evade
    background(img7);
    drawUi1();

  if(frameCount % 5 == 0){
    // spawn!
    meteors.push(new Meteor());
    if (this.y > 725){
      
    }
  }

  meteors.forEach((m) => {
    m.draw();
    m.checkCollision();
  });

  ship.draw();
  ship.move();
  ship2.draw();
  ship2.move(); 

  if (lives3 <= 0){
    gameState = 4;
  }
  if (lives4 <= 0){
    gameState = 4;
  }
  if (keyCode == 27){
    gameState = 0
  }
}

//Space Maze
function game3(){
    background(img8);
    drawUi2();


  
  if (keyCode == 27){
    gameState = 0
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
    timer = 15;
    restart();
     }
   if(keyCode == 50){
     gameState = 2
     restart();
     }
  if(keyCode == 51){
     gameState = 3
    restart();
     }
}

function drawUi(){
    
  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player I : '+ score, width/4,710);

  fill(255,255,255);
  textSize(17);
  textFont('CASTELLAR');
  textAlign(CENTER);
  text('Player II : '+ score2, 900,710);


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
    // background(0);
    balls = [];
    // text = [];
  }
}

function drawUi1(){
  //Levens
  fill(255, 0,0);
  textAlign(CENTER);
  textSize(30); 
  text('X' + lives3, 1120, 60);
  text('X' + lives4, 1120, 115);

  image(img9, 1140,27,50,50)
  image(img9, 1140,80,50,50)
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
    bullet.life = 130;
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
    bullet2.life = 130;
    bullets2.add(bullet2);

  }

  drawSprites();
  
  fill(255);
  textAlign(LEFT);
  textSize(10); 
  text('Controls: Arrows + Enter', 50, 50);
  text('Controls: WASD + Space', 50, 75);

  //Levens
  fill(255, 0,0);
  textAlign(CENTER);
  textSize(30); 
  text('X' + lives, 1120, 60);
  text('X' + lives, 1120, 115);

  image(img9, 1140,27,50,50)
  image(img9, 1140,80,50,50)



}

function gameOver(){
  background(img4)
  
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
  textSize(15);
  textAlign(LEFT);
  textFont('Audiowide,bolder');
  text('Press Esc for menu', 100,50);
  // text('Press enter for again', 100, 100)

  
  // esc
  if (keyCode == 27){
    gameState = 0
    score = 0;
    score2 = 0;
    balls = [];
    newBallsPlease();
  }
  // if (keyCode == 13){
  //   gameState = 1
  //   score = 0;
  //   score2 = 0;
  //   balls = [];
  //   newBallsPlease();
    //Deze werkt niet goed: Bij elk spel gaat die again naar Space Race
  //}
  
  // fill(255,255,255);
  // textSize(17);
  // textFont('CASTELLAR');
  // text('Player I : '+ score, 450,610);

  // fill(255,255,255);
  // textSize(17);
  // textFont('CASTELLAR');
  // text('Player II : '+ score2, 750,610);

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
  img4 = loadImage('img/GameoverSMB.webp');
  img5 = loadImage('img/moonbg.jpg');
  img6 = loadImage('img/BlueBird.png');
  img7 = loadImage('img/Background2.jpg');
  img8 = loadImage('img/Background3.jpg');
  img9 = loadImage('img/heart.png');
  img10 = loadImage('img/meteor.crdownload');
  shipImage = loadImage('assets/asteroids_ship0001.png');
  bulletImage = loadImage('assets/asteroids_bullet.png');
  shipImage2 = loadImage('assets/asteroids_ship0001.png');
  bulletImage2 = loadImage('assets/asteroids_bullet.png');

  gif = loadImage('assets/Moon.gif');
  gif1 = loadImage('assets/explosion.gif');
}


function restart(){
  balls = [];
  meteors = [];
  setup();
  lives3 = 5
  lives4 = 5;
}
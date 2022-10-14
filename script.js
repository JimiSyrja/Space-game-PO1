var balls = [];
var ship;
var ship2;
var meteor;
var lives = 3;
var lives3 = 5;
var lives4 = 5;
var score = 0;
var score2 = 0;
var timer = 75;
var gameState = 0;
var meteors = [];
var meteors2 = [];
let gif;
var music;


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
    // meteor = new Ball2();
  
    newBallsPlease()

    textAlign(CENTER);

        ship3 = createSprite(300, height / 2);
        ship3.maxSpeed = 6;
        ship3.friction = 0.01;
        ship3.addImage(SHIP_NORMAL, img12);
        ship3.addAnimation(SHIP_THRUST,     'assets/asteroids_ship0002.png', 'assets/asteroids_ship0007.png');

        ship4 = createSprite(width / 2, height / 2);
        ship4.maxSpeed = 6;
        ship4.friction = 0.01;
        ship4.addImage(SHIP_NORMAL2, img14);
        ship4.addAnimation(SHIP_THRUST2, 'assets/asteroids_ship0003.png', 'assets/asteroids_ship0006.png');


          bullets = new Group();
          bullets2 = new Group();
  
    }

function newBallsPlease(){
  //laat de asteroids random aantallen spawnen
    for(var i = 0; i < 100; i++){
      let randomY = Math.floor(Math.random() * 615);
      let randomX = Math.floor(Math.random() * 1200);       
      //let randomR = Math.floor(Math.random() * 30) + 15;
      let randomVx = Math.floor(Math.random() * 3) + 1;
      if(Math.random() > 0.5){
        randomVx *= -1;
      }  
      
      //let randomVy = Math.floor(Math.random() * 5) + 1;
      balls.push(new Ball(randomX,randomY,20,20,randomVx,0,"red"));
    }
}

function draw() {
    if(gameState == 0){
    menu(); 
  } else if(gameState == 1){
    SpaceRace(); 
  } else if(gameState == 2){
    SpaceEvade();
  } else if(gameState == 3){
    SatisfyingSpaceArt();
  }else if(gameState == 4){
    gameOver();
  } else if(gameState == 5){
    gameOver2();
  }

}

function SpaceRace(){
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
    music.stop();
    newBallsPlease();
  }   

   if ( timer <= 0){
    gameState = 3;
    music.stop();
    balls = [];
     
  }
}

function SpaceEvade() {
  //Space Evade
    background(bg);
    drawUi1();

  if(frameCount % 5 == 0){
    // spawn!
    meteors.push(new Meteor());
    if (this.y > 725){
      
    }
  }

  meteors.forEach((m) => {
    m.draw(); 
  });

  ship.checkCollision2();
  ship.drawGame2();
  ship.move();
  ship2.drawGame2();
  ship2.move(); 

  if (lives3 <= 0){
    gameState = 4;
  }
  if (lives4 <= 0){
    gameState = 4;
  }
  if (keyCode == 27){
    gameState = 0
    music.stop();
    restart();
  }
}

function SatisfyingSpaceArt() {
    background(0);
    drawUi2();
}

function menu(){
    background (gif)
    fill(4, 44, 220 );
    textSize(70);
    textFont (myFont);
    text('Space Games', 400,250);
  
    fill(255,255,255);
    textSize(35);
    textAlign(LEFT);
    textFont(myFont1);
    text('Press 1 for Space Race', 100,350);
    text('Press 2 for Space Evade', 100,400);
    text('Press 3 for SatisfyingSpaceArt', 100,450);
    textSize(30);
    text('Made by Jimi and Zujan', 810,720);
    image(gif2,50,575);

  // 1  
   if (keyCode == 49){ 
    gameState = 1
    timer = 75;
    music.play();
    restart();
     //wait(1000);
     }
   if(keyCode == 50){
     gameState = 2
      music.play();
     restart();
     }
     if(keyCode == 51){
     gameState = 3
      music.play();
     restart();
     }
}

function drawUi(){
    
  fill(255,255,255);
  textSize(17);
  textFont(myFont2);
  textAlign(CENTER);
  text('Player I : '+ score, width/4,710);

  fill(255,255,255);
  textSize(17);
  textFont(myFont2);
  textAlign(CENTER);
  text('Player II : '+ score2, 900,710);


  fill(255,255,255);
  textSize(20);
  textFont(myFont2);
  textAlign(CENTER);
  text('TIME: '+ timer + ' s', width/2,100);

  if(frameCount % 60 == 0){
    timer -= 1;
  }

  
  // if ( timer <= 0){
  //   gameState = 3;
  //    music.play();
  //   // background(0);
  //   balls = [];
  //   // text = [];
  // }
}

function drawUi1(){
  //Levens
  fill(255, 0,0);
  textAlign(CENTER);
  textSize(30); 
  text('X' + lives3, 1120, 60);
  text('X' + lives4, 1120, 115);

  image(img6, 1140,27,50,50)
  image(img6, 1140,80,50,50)
}

function drawUi2(){
  fill(255,255,255);
  textAlign(CENTER);
  textSize(20); 
  text('CONTROLS: WASD + Spacebar' , 1000, 60);
  text('CONTROLS: ArrowKeys + Enter', 1000, 90);

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
  
      if (keyDown('Enter')) {
      var bullet = createSprite(ship3.position.x, ship3.position.y);
      bullet.addImage(img13);
      bullet.setSpeed(10 + ship3.getSpeed(), ship3.rotation);
      bullet.life = 100;
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

       if (keyDown('Space')) {
       var bullet2 = createSprite(ship4.position.x, ship4.position.y);
        bullet2.addImage(img15);
        bullet2.setSpeed(10 + ship4.getSpeed(), ship4.rotation);
        bullet2.life = 100;
        bullets2.add(bullet2);
    }

    drawSprites();

  
  }

function gameOver(){
  background(img4)
  
  if (score > score2){
    fill(213, 28, 28)
    textSize(20);
    // textFont("Prismatic")
    text("Player 1 heeft gewonnen!!!",  width/2,550)
  }
  else if(score2 > score){
    fill(213, 28, 28)
    textSize(20);
    // textFont("Prismatic")
    text("Player 2 heeft gewonnen!!!",  width/2,550)
  }
  else if(score == score2){
    fill(213, 28, 28)
    textSize(30);
    // textFont("Prismatic")
    text("draw!!!", width/2,550)
  }
  

  fill(255,255,255 );
  textSize(15);
  textAlign(LEFT);
  // textFont('Audiowide,bolder');
  text('Press Esc for menu', 100,50);
  // text('Press enter for again', 100, 100)

  // esc
  if (keyCode == 27){
    gameState = 0
    score = 0;
    score2 = 0;
    balls = [];
    music.stop();
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

}

function gameOver2(){
  background(img4)
  
  fill(255,255,255 );
  textSize(15);
  textAlign(LEFT);
  // textFont('Audiowide,bolder');
  text('Press Esc for menu', 100,50);
  text('Press enter for again', 100, 100)

  // esc
  if (keyCode == 27){
    gameState = 0;
    restart();
    music.stop();
    newBallsPlease();
  }
  if (keyCode == 13){
    gameState = 2
    music.play();
    restart();
  }
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
  bg = loadImage('img/background1.png');
  img1 = loadImage('img/SpaceShip1.webp');
  img2 = loadImage('img/Meteor.png');
  img3 = loadImage('img/SpaceShip2.webp');
  img4 = loadImage('img/GameoverSMB.webp');
  img5 = loadImage('img/moonbg.jpg');
  img6 = loadImage('img/heart.png');
  img7 = loadImage('img/Player1.png');
  img8 = loadImage('img/Player2.png');
  img10 = loadImage('img/meteor.crdownload');
  img11 = loadImage('img/meteorite.png');

  music = loadSound('HyperspaceThemeMusic.mp3');

  myFont = loadFont('fonts/ka1.ttf');
  myFont1 = loadFont('fonts/VCR_OSD_MONO.ttf');
  myFont2 = loadFont('fonts/Gameplay.ttf');

  
  gif = loadImage('assets/Moon.gif');
  gif1 = loadImage('assets/explosion.gif');
  gif2 = loadImage('assets/astronaut.gif');

  img12 = loadImage('assets/asteroids_ship0001.png');
  img13 = loadImage('assets/asteroids_bullet.png');
  img14 = loadImage('assets/asteroids_ship0001.png');
  img15 = loadImage('assets/asteroids_bullet.png');

}

function restart(){
  balls = [];
  meteors = [];
  setup();
  lives3 = 5
  lives4 = 5;
  score = 0;
  score2 = 0;
}

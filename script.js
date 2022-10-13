var balls = [];
var ship;
var ship2;
var lives = 3;
var lives3 = 5;
var lives4 = 5;
var score = 0;
var score2 = 0;
var timer = 75;
var gameState = 3;
var meteors = [];
var meteors2 = [];
let gif;
let fontPixel;
var music;

var myfont1;

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
  }else if(gameState == 3){
    gameOver();
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
    m.checkCollision();
  });

  ship.drawGame2();
  ship.move();
  ship2.drawGame2();
  ship2.move(); 

  if (lives3 <= 0){
    gameState = 3;
  }
  if (lives4 <= 0){
    gameState = 3;
  }
  if (keyCode == 27){
    gameState = 0
    music.stop();
    restart();
  }
}


function menu(){
    background (gif)
    fill(4, 44, 220 );
    textSize(60);
    textAlign(CENTER);
   // text('Space Games', width/4,250);
    textFont(myfont1);
    fill(255,255,255);
    textSize(25);
    textFont('CASTELLAR');
    textAlign(LEFT);
    text('1 - Space Race', 150,350);
    text('2 - Space Evade', 150,400);

  // 1  
   if (keyCode == 49){ 
    gameState = 1
    timer = 75;
    music.play();
    restart();
     }
   if(keyCode == 50){
     gameState = 2
      music.play();
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
    textFont("Prismatic")
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

  //fontPixel = loadFont('assets/fipps.zip');

  
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
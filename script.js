//let bg;
balls = [];
var Ship;

function setup() {
  createCanvas(720, 400);


  for(var i = 0; i < 30; i++){
    let randomY = Math.floor(Math.random() * 400);
    let randomX = Math.floor(Math.random() * 500);
    let randomV = Math.floor(Math.random() * 7) + 1;
    balls.push(new Ball(randomX,randomY,10,10,randomV,0,"white"));
  }
}



function draw() {
	background(bg);  
  
 Ship.show();

  balls.forEach(b => {
    b.draw();
  }
)}



function preload(){
  bg = loadImage('img/background.jpg');
  raket = loadImage("img/raket.png")
}
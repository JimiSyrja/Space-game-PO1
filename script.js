
balls = [];

function setup() {
  createCanvas(500, 600);
  background(3, 13, 106)

  ship1 = new Ship(125, 500, 30, 40, 0, -2, 'red')
  //ship2 = new Ship(375,500,30,40,0,-2,'green');

  for(var i = 0; i < 30; i++){
    let randomY = Math.floor(Math.random() * 400);
    let randomX = Math.floor(Math.random() * 500);
    let randomV = Math.floor(Math.random() * 7) + 1;
    balls.push(new Ball(randomX,randomY,10,10,randomV,0,"white"));
  }
}



function draw() {
	background(3, 13, 106);  
  
 ship1.draw();
 //ship2.draw();

  balls.forEach(b => {
    b.draw();
  })
}




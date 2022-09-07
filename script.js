
function setup() {
  createCanvas(400, 400);
  background(3, 13, 106)

  ship1 = new Ship(80,350,120,350,100,300, 'red')
  ship2 = new Ship(280,350,320,350,300,300,'green')

  ball1 = new Ball (200, 100, 10, 10, 3,0,   "white")
  ball2 = new Ball (200, 150, 10, 10, 4,0,  "white")
  ball3 = new Ball (200, 200, 10, 10, 5,0, "white")
}



function draw() {
	background(3, 13, 106);  
  
 ship1.draw()
 ship2.draw()
   
 ball1.draw()
 ball2.draw()
 ball3.draw()
}




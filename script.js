
function setup() {
  createCanvas(400, 400);
  background(30, 30, 104)

  ship1 = new Ship(75,300,125,300,100,250, 'red')
  ship2 = new Ship(275,300,325,300,300,250,'green')

  ball1 = new Ball (200, 220, 20, 20, 3,0,   "white")
  ball2 = new Ball (200, 260, 20, 20, 5,0,  "white")
  ball3 = new Ball (200, 280, 20, 20, 9,0, "white")
}



function draw() {
	background(30, 30, 104);  
  
 ship1.draw()
 ship2.draw()
   
 ball1.draw()
 ball2.draw()
 ball3.draw()
}




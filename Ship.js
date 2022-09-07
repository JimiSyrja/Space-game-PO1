class Ship{
  constructor(x1, y1, x2, y2, x3, y3,c){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3= y3;
    this.color = c;
  }

  draw(){
    fill(this.color)
    triangle(this.x1, this.y1,this.x2, this.y2, this.x3, this.y3)
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
}


var ship1, ship2;




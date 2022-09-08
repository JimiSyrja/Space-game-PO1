class Ship{
  constructor(x, y, w, h, vx, vy,c){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = c;
  }

  draw(){
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.heigth, this.vx, this.vy)
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(ship1.y == 0){
      ship1.y = 500
      
    }
  }
}

//Maakt de ships
var ship1, ship2;



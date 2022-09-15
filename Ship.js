class Ship{
  constructor(x, y, w, h, vx, vy){
    this.x = 200;
    this.y = 200;
    this.width = 50;
    this.height = 50;
    this.vx = 0;
    this.vy = -1;
  }

  show(){
    
    image(raket, this.x, this.y, this.width, this.heigth, this.vx, this.vy)
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //if(ship1.y == 0){
      //ship1.y = 500
      
  }
}



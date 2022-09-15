class Ship{
  constructor(x, y, w, h, vx, vy){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
  }

  show(){
    
    image(raket, 200,200,50,50,0,-1)
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //if(ship1.y == 0){
      //ship1.y = 500
      
  }
}



class Ball {
  constructor(x, y, w, h,vx,vy, c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.heigth = h;
    this.vx = vx;
    this.vy = vy;
    this.color = c;
  }
  
   draw(){
   fill(this.color)
    ellipse(this.x,this.y,this.width,this.heigth);
   this.x = this.x + this.vx;

    if(this.x < 25 || this.x >= 400){
      this.vx = this.vx * -1;
    }
  }
}
var ball1,ball2,ball3;
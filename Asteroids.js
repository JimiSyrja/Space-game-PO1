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

    if(this.x < 0 || this.x >= 500){
      this.vx = this.vx * -1;
    }
  }
}

//var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16,ball17,ball18,ball19;
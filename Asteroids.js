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
   image(img2, this.x,this.y,this.width,this.heigth);
   this.x = this.x + this.vx;
   this.y = this.y + this.vy;

    if(this.x < 0 || this.x >= 1200){
      this.vx = this.vx * -1;
    }
     if(this.y < 0 || this.y >= 800){
      this.vy = this.vy * -1;
    }
  }

  checkCollision() {

  if (this.x >= ship.xpos && this.x <= (ship.xpos + ship.playerWidth) &&
      this.y >= ship.ypos && this.y <= (ship.ypos + ship.playerHeight)) {
      ship.xpos = 300; 
      ship.ypos = 770;
      console.log("hit")
    }
    
  if (this.x >= ship2.xpos2 && this.x <= (ship2.xpos2 + ship2.playerWidth2) &&
      this.y >= ship2.ypos2 && this.y <= (ship2.ypos2 + ship2.playerHeight2)) {
      ship2.xpos2 = 900; 
      ship2.ypos2 = 770;
      console.log("hit")
    }
    
  }
  
}
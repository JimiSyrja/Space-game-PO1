class Player {
  constructor(){
    this.playerHeight = 20;
    this.playerWidth = 20;
    this.xpos = 200;
    this.ypos = 300;
    this.speed = 10;
  }

  draw(){
    rect(this.xpos, this.ypos, this.playerWidth, this.playerHeight);
    if(ship.ypos == 0){
     ship.ypos = 500
    }
  }

  move() {
      if (keyIsDown(UP_ARROW)){
        this.ypos -= this.speed;
      } else if (keyIsDown(DOWN_ARROW)){
        this.ypos += this.speed;
      } else if (keyIsDown(LEFT_ARROW)){
        this.xpos -= this.speed;
      } else if (keyIsDown(RIGHT_ARROW)){
        this.xpos += this.speed;
      }
  }
}

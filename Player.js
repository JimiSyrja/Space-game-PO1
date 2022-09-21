class Player {
  constructor(){
    this.playerHeight = 20;
    this.playerWidth = 20;
    this.xpos = width/4;
    this.ypos =   370;
    this.speed = 5;
  }

  draw(){
    fill(250, 250, 51)
    rect(this.xpos, this.ypos, this.playerWidth, this.playerHeight);
    
    if(ship.ypos < 0){
     ship.ypos = 400
      score = score + 1;
    }
    if(ship.ypos > 375){
     ship.ypos = 375
    }
    if(ship.xpos < 0){
     ship.xpos = 0
    }
    if(ship.xpos > 700){
     ship.xpos = 700
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

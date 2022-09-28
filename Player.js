class Player {
  constructor(){
    this.playerHeight = 35;
    this.playerWidth = 25;
    this.xpos = 95;
    this.ypos = 460;
    this.speed = 5;
  }

  draw(){
    //fill(250, 250, 51)
    image(img1, this.xpos, this.ypos, this.playerWidth, this.playerHeight);
    
    if(ship.ypos < 0){
     ship.ypos = 525
     ship.xpos = 95
      score = score + 1;
    }
    if(ship.ypos > 467){
     ship.ypos = 467
    }
    if(ship.xpos < 0){
     ship.xpos = 0
    }
    if(ship.xpos > 400){
     ship.xpos = 400
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


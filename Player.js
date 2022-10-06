class Player {
  constructor(){
    this.playerHeight = 35;
    this.playerWidth = 25;
    this.xpos = 300;
    this.ypos = 770;
    this.speed = 5;
  }

  draw(){
    image(img1, this.xpos, this.ypos, this.playerWidth, this.playerHeight);
    
    if(ship.ypos < 0){
     ship.xpos = 300
     ship.ypos = 770
      score = score + 1;
    }
    if(ship.ypos > 775){
     ship.ypos = 775
    }
    if(ship.xpos < 0){
     ship.xpos = 0
    }
    if(ship.xpos > 1185){
     ship.xpos = 1185
    }
  }

  move() {
      if (keyIsDown(87)){
        this.ypos -= this.speed;
      } else if (keyIsDown(83)){
        this.ypos += this.speed;
      } else if (keyIsDown(65)){
        this.xpos -= this.speed;
      } else if (keyIsDown(68)){
        this.xpos += this.speed;
      }
  }
}

  
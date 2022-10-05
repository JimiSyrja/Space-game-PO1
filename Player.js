class Player {
  constructor(){
    this.playerHeight = 35;
    this.playerWidth = 25;
    this.xpos = 150;
    this.ypos = 725;
    this.speed = 5;
  }

  draw(){
    image(img1, this.xpos, this.ypos, this.playerWidth, this.playerHeight);
    
    if(ship.ypos < 0){
     ship.ypos = 725
     ship.xpos = 150
      score = score + 1;
    }
    if(ship.ypos > 775){
     ship.ypos = 775
    }
    if(ship.xpos < 0){
     ship.xpos = 0
    }
    if(ship.xpos > 585){
     ship.xpos = 585
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

  
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
    if(ship.xpos > 415){
     ship.xpos = 415
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

  
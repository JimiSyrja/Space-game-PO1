class Player {
  constructor(){
    this.playerHeight = 35;
    this.playerWidth = 25;
    this.xpos = 300;
    this.ypos = 635;
    this.speed = 5;
  }

  draw(){
    image(img1, this.xpos, this.ypos, this.playerWidth, this.playerHeight);
    
    if(ship.ypos < 0){
     ship.xpos = 300
     ship.ypos = 635
      score = score + 1;
    }
    if(ship.ypos > 700){
     ship.ypos = 700
    }
    if(ship.xpos < 0){
     ship.xpos = 0
    }
    if(ship.xpos > 1185){
     ship.xpos = 1185
    }
  }

  drawGame2(){
    image(img7, this.xpos, this.ypos, 75, 75);
    if(ship.xpos < 0){
     ship.xpos = 0
    }
    if(ship.xpos > 1185){
     ship.xpos = 1185
    }
  }
 
  moveShip1() {
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

  move(){
      if (keyIsDown(65)){
        this.xpos -= this.speed;
      } if (keyIsDown(68)){
        this.xpos += this.speed;
      }
  }

  checkCollision(){
     if (this.xpos >= meteor.x4 && this.xpos <= (meteor.x4 + meteor.width4) &&
    this.ypos >= meteor.y4 && this.ypos <= (meteor.y4 + meteor.height4)){
      lives3 = lives3 -1;
      console.log("hit")
     }
  }
}

  
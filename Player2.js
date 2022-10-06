class Player2 {
  constructor(){
    this.playerHeight2 = 30;
    this.playerWidth2 = 25;
    this.xpos2 = 900;
    this.ypos2 = 770;
    this.speed2 = 5;
  }

  draw(){
    image(img3, this.xpos2, this.ypos2, this.playerWidth2, this.playerHeight2);
    
    if(ship2.ypos2 < 0){
     ship2.xpos2 = 900
     ship2.ypos2 = 770
      score2 = score2 + 1;
    }
    if(ship2.ypos2 > 775){
     ship2.ypos2 = 775
    }
    if(ship2.xpos2 < 0){
     ship2.xpos2 = 0
    }
    if(ship2.xpos2 > 1185){
     ship2.xpos2 = 1185
    }
  }

 move() {
  if (keyIsDown(UP_ARROW)) {
    this.ypos2 -= this.speed2;
  } else if (keyIsDown(DOWN_ARROW)){
    this.ypos2 += this.speed2;
  } else if (keyIsDown(LEFT_ARROW)) {
    this.xpos2 -= this.speed2;
  } else if (keyIsDown(RIGHT_ARROW)) {
    this.xpos2 += this.speed2;
  }
 }

  checkCollision() {

  if (this.xpos2 >= ship.xpos && this.xpos2 <= (ship.xpos + ship.playerWidth) &&
      this.ypos2 >= ship.ypos && this.ypos2 <= (ship.ypos + ship.playerHeight)) {
      ship2.xpos2 = 900; 
      ship2.ypos2 = 770;
      ship.xpos = 300;
      ship.ypos = 770;
      console.log("hit")
    }
}
}

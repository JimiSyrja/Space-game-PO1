class Player2 {
  constructor(){
    this.playerHeight2 = 30;
    this.playerWidth2 = 25;
    this.xpos2 = 330;
    this.ypos2 = 460;
    this.speed2 = 5;
  }

  draw(){
    image(img3, this.xpos2, this.ypos2, this.playerWidth2, this.playerHeight2);
    
    if(ship2.ypos2 < 0){
     ship2.ypos2 = 525
     ship2.xpos2 = 320
      score2 = score2 + 1;
    }
    if(ship2.ypos2 > 467){
     ship2.ypos2 = 467
    }
    if(ship2.xpos2 < 0){
     ship2.xpos2 = 0
    }
    if(ship2.xpos2 > 415){
     ship2.xpos2 = 415
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
      ship2.xpos2 = 330; 
      ship2.ypos2 = 460;
      ship.xpos = 95;
      ship.ypos = 460
      console.log("hit")
    }
}
}

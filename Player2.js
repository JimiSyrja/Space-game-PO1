class Player2 {
  constructor(){
    this.playerHeight2 = 30;
    this.playerWidth2 = 25;
    this.xpos2 = 330;
    this.ypos2 = 460;
    this.speed2 = 5;
  }

  draw(){
    //fill(250, 250, 51)
    image(img3, this.xpos2, this.ypos2, this.playerWidth2, this.playerHeight2);
    
    if(ship2.ypos2 < 0){
     ship2.ypos2 = 525
     ship2.xpos2 = 320
      score = score + 1;
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
}


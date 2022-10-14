class Player2 {
  constructor(){
    this.playerHeight2 = 30;
    this.playerWidth2 = 25;
    this.xpos2 = 900;
    this.ypos2 = 625;
    this.speed2 = 5;
  }

  draw(){
    image(img3, this.xpos2, this.ypos2, this.playerWidth2, this.playerHeight2);
    
    if(ship2.ypos2 < 0){
     ship2.xpos2 = 900
     ship2.ypos2 = 675
      score2 = score2 + 1;
    }
    if(ship2.ypos2 > 700){
     ship2.ypos2 = 700
    }
    if(ship2.xpos2 < 0){
     ship2.xpos2 = 0
    }
    if(ship2.xpos2 > 1185){
     ship2.xpos2 = 1185
    }
  }

  drawGame2(){
    image(img8, this.xpos2, this.ypos2, 75,75);
    if(ship2.xpos2 < 0){
     ship2.xpos2 = 0
    }
    if(ship2.xpos2 > 1185){
     ship2.xpos2 = 1185
    }
  }

 moveShip2() {
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

  move() {
   if (keyIsDown(LEFT_ARROW)) {
     this.xpos2 -= this.speed2;
   } else if (keyIsDown(RIGHT_ARROW)) {
     this.xpos2 += this.speed2;
   }
  }
  // checkCollision(){

  // if (this.xpos >= ship.xpos && this.xpos <= (ship.xpos + ship.playerWidth) &&
  //     this.ypos >= ship.ypos && this.ypos <= (ship.ypos + ship.playerHeight)) {
  //     ship2.xpos2 = 900; 
  //     ship2.ypos2 = 675;
  //     ship.xpos = 300;
  //     ship.ypos = 675;
  //     console.log("hit")
  //   }
  //   if (this.x3 >= ship2.xpos2 && this.x3 <= (ship2.xpos2 + ship2.playerWidth2)    &&
  //   this.y3 >= ship2.ypos2 && this.y3 <= (ship2.ypos2 + ship2.playerHeight2)) {
  //     // ship2.xpos2 = 900; 
  //     // ship2.ypos2 = 675;
  //     lives4 = lives4  - 1;
  //     console.log("hit")
  //   }
  // }
}

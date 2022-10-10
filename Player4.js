class Player4 {
  constructor(){
    this.playerHeight4 = 30;
    this.playerWidth4 = 25;
    this.xpos4 = 900;
    this.ypos4 = 675;
    this.speed4 = 5;
  }

  draw(){
    image(img3, this.xpos4, this.ypos4, this.playerWidth4, this.playerHeight4);
    if(player4.xpos4 < 0){
     player4.xpos4 = 0
    }
    if(player4.xpos4 > 1185){
     player4.xpos4 = 1185
    }
  }

 move() {
  if (keyIsDown(LEFT_ARROW)) {
    this.xpos4 -= this.speed4;
  } else if (keyIsDown(RIGHT_ARROW)) {
    this.xpos4 += this.speed4;
  }
 }
}
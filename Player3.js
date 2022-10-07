class Player3 {
  constructor(){
    this.playerHeight3 = 35;
    this.playerWidth3 = 25;
    this.xpos3 = 300;
    this.ypos3 = 770;
    this.speed3 = 5;
  }

  draw(){
    image(img1, this.xpos3, this.ypos3, this.playerWidth3, this.playerHeight3);
    
    if(player3.xpos3 < 0){
     player3.xpos3 = 0
    }
    if(player3.xpos3 > 1185){
     player3.xpos3 = 1185
    }
  }

  move() {
      if (keyIsDown(65)){
        this.xpos3 -= this.speed3;
      } if (keyIsDown(68)){
        this.xpos3 += this.speed3;
      }
 }
}
  
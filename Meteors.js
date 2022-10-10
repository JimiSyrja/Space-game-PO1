class Meteor{
  constructor(){
    this.x = random(width);
    this.y = 0;
  }

  draw(){
    image(img6, this.x, this.y, 50,60);
    this.y += 5;
  }

  checkCollision() {

  if (this.x >= player3.xpos3 && this.x <= (player3.xpos3 + player3.playerWidth3) &&
      this.y >= player3.ypos3 && this.y <= (player3.ypos3 + player3.playerHeight3)) {
      player3.xpos3 = 300; 
      player3.ypos3 = 675;
      console.log("hit")
   }
  }
}

var meteors = [];


class Meteor{
  constructor(){
    this.x = random(width);
    this.y = 0;
  }

  draw(){
    image(img6, this.x, this.y, 50,60);
    this.y += 5;
    if (this.y > 725){
      
    }
  }

  checkCollision() {

  if (this.x >= ship.xpos && this.x <= (ship.xpos + ship.playerWidth) &&
      this.y >= ship.ypos && this.y <= (ship.ypos + ship.playerHeight)) {
      ship.xpos = 300; 
      ship.ypos = 675;
      lives3 = lives3  - 1;
      console.log("hit")
   }

    if (this.x >= ship2.xpos2 && this.x <= (ship2.xpos2 + ship2.playerWidth2) &&
      this.y >= ship2.ypos2 && this.y <= (ship2.ypos2 + ship2.playerHeight2)) {
      ship2.xpos2 = 300; 
      ship2.ypos2 = 675;
      lives4 = lives4  - 1;
      console.log("hit")
    }
  }
}

//var meteors = [];


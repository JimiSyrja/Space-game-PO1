class Meteor{
  constructor(){
    this.x3 = random(width);
    this.y3 = 0;
  }

  draw(){
    image(img11, this.x3, this.y3, 50,60);
    this.y3 += 5;
    if (this.y3 >= 725){
     ();
    }
  }

  checkCollision() {

  if (this.x3 >= ship.xpos && this.x3 <= (ship.xpos + ship.playerWidth) &&
      this.y3 >= ship.ypos && this.y3 <= (ship.ypos + ship.playerHeight)) {
      // ship.xpos = 300; 
      // ship.ypos = 675;
      lives3 = lives3  - 1;
      console.log("hit")
   }

    if (this.x3 >= ship2.xpos2 && this.x3 <= (ship2.xpos2 + ship2.playerWidth2) &&
      this.y3 >= ship2.ypos2 && this.y3 <= (ship2.ypos2 + ship2.playerHeight2)) {
      // ship2.xpos2 = 900; 
      // ship2.ypos2 = 675;
      lives4 = lives4  - 1;
      console.log("hit")
    }
  }
}




class Meteor {
  constructor(x4, y4, width4, heigth4) {
    this.x4 = random(width);
    this.y4 = 0;
    this.width4 = 50;
    this.heigth4 = 50;
  }
  
   draw(){
   image(img11, this.x4,this.y4,this.width4,this.heigth4);
   this.y4 += 5;

   }
     checkCollision2() {

  if (this.x4 >= ship.xpos && this.x4 <= (ship.xpos + ship.playerWidth) &&
      this.y4 >= ship.ypos && this.y4 <= (ship.ypos + 10  + ship.playerHeight) && this.y4 >= ship.ypos && this.y4 <= (ship.ypos -10 + ship.playerHeight)) {
      ship.xpos = 300; 
      ship.ypos = 635;
      lives3 = lives3 -1;
      console.log("hit")
    }
    
  if (this.x4 >= ship2.xpos2 && this.x4 <= (ship2.xpos2 + ship2.playerWidth2) &&
      this.y4 >= ship2.ypos2 && this.y4 <= (ship2.ypos2 + ship2.playerHeight2)) {
      ship2.xpos2 = 900; 
      ship2.ypos2 = 635;
      console.log("hit")
    }
    
  }
}

  

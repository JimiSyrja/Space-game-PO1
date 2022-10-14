// class Meteor{
//   constructor(){
//     this.xpos = random(width);
//     this.ypos = 0;
//     this.meteorHeight = 60;
//     this.meteorWidth = 50;
//   }

//   draw(){
//     image(img11, this.xpos this.ypos,  this.meteorHeight,this.meteorWidth);
//     this.ypos += 5;
//     // if (this.y3 >= 725){
    
//     // }
//   }
// }

// // checkCollision2() {

//   if (this.xpos >= meteor.xpos && this.xpos <= (meteor.xpos + this.meteorWidth) &&
//       this.ypos >= meteor.ypos && this.ypos <= (meteor.ypos + this.meteorHeight)) {
//       //image(gif1, ship.xpos, ship.ypos)
//       //gif.play();
//       //wait(1000);
//       lives3 = lives3 -1;
//       console.log("hit")
//     }
//   }

// if (this.x3 >= ship2.xpos2 && this.x3 <= (ship2.xpos2 + ship2.playerWidth2)    &&
//   //   this.y3 >= ship2.ypos2 && this.y3 <= (ship2.ypos2 + ship2.playerHeight2)) {
//   //     // ship2.xpos2 = 900; 
//   //     // ship2.ypos2 = 675;
//   //     lives4 = lives4  - 1;
//   //     console.log("hit")
//   //   }
//   // }

// class Ball {
//   constructor(x, y, w, h,vx,vy, c) {
//     this.x = random(width);
//     this.y = 0;
//     this.width = w;
//     this.heigth = h;
//     this.vx = vx;
//     this.vy = vy;
//     this.color = c;
//   }
  
//    draw(){
//    fill(this.color)
//    image(img2, this.x,this.y,this.width,this.heigth);
//    this.y = this.y + this.vy;

//   }
  
//   checkCollision() {

//   if (this.x >= ship.xpos && this.x <= (ship.xpos + ship.playerWidth) &&
//       this.y >= ship.ypos && this.y <= (ship.ypos + 10  + ship.playerHeight) && this.y >= ship.ypos && this.y <= (ship.ypos -10 + ship.playerHeight)) {
//       //image(gif1, ship.xpos, ship.ypos)
//       //gif.play();
//       //wait(1000);
//       ship.xpos = 300; 
//       ship.ypos = 770;
//       console.log("hit")
//     }
    
//   if (this.x >= ship2.xpos2 && this.x <= (ship2.xpos2 + ship2.playerWidth2) &&
//       this.y >= ship2.ypos2 && this.y <= (ship2.ypos2 + ship2.playerHeight2)) {
//       ship2.xpos2 = 900; 
//       ship2.ypos2 = 770;
//       console.log("hit")
//     }
    
//   }
  
// }
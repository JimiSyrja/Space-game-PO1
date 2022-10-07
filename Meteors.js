class Meteor{
  constructor(){
    this.x = random(width);
    this.y = 0;
  }

  draw(){
    image(img6, this.x, this.y, 30);
    this.y += 5;
  }
}

var meteors = [];

//function draw() {

  // bij elke 50 frames voegen we een nieuwe Ball toe
  // aan de lijst
  //if(frameCount % 120 == 0){
    // spawn!
  //  meteors.push(new Meteor());
 // }


//  meteors.forEach((m) => {
 //   m.draw();
//  });
//}
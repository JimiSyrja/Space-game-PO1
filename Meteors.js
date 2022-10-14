class Meteor{
  constructor(){
    this.x3 = random(width);
    this.y3 = 0;
    this.meteorHeight = 60;
    this.meteorWidth = 50;
  }

  draw(){
    image(img11, this.x3, this.y3,  this.meteorHeight,this.meteorWidth);
    this.y3 += 5;
    // if (this.y3 >= 725){
    
    // }
  }
}
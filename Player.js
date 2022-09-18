class Player {
  constructor(){
    this.playerHeight = 40;
    this.playerWidth = 20;
    this.radius = 20;
    this.xpos = 200;
    this.ypos = 300;
    this.speed = speed;
  }

  

  move() {
      // Pas op dat je speler hiermee uit het veld kan lopen!
      // Pas de code aan zodat dat niet kan gebeuren
      if (keyIsDown(UP_ARROW)){
        this.ypos -= this.speed;
      } else if (keyIsDown(DOWN_ARROW)){
        this.ypos += this.speed;
      } else if (keyIsDown(LEFT_ARROW)){
        this.xpos -= this.speed;
      } else if (keyIsDown(RIGHT_ARROW)){
        this.xpos += this.speed;
      }
  }
}

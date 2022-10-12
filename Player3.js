class Player3 {
  constructor(){
    this.xpos = 500;
    this.ypos = 400;
    this.playerWidth = 40;
    this.playerHeight = 40;
    this.rotation = this.rotation;
    this.speed = this.speed;
  }

  draw(){
   image(img3, this.xpos, this.ypos, this.playerWidth, this.playerHeight);
    
    for (var i = 0; i < allSprites.length; i++) {
    var sprite = allSprites[i];
    if (sprite.position.x < -MARGIN) {
      sprite.position.x = width+MARGIN;
    }
    if (sprite.position.x > width + MARGIN) {
      sprite.position.x = -MARGIN;
    }
    if (sprite.position.y < -MARGIN) {
      sprite.position.y = height + MARGIN;
    }
    if (sprite.position.y > height + MARGIN) {
      sprite.position.y = -MARGIN;
    }
  }

  
  if (keyDown(LEFT_ARROW)) {
    ship5.rotation -= 4;
  }
  if (keyDown(RIGHT_ARROW)) {
    ship5.rotation += 4;
  }

  if (keyDown(UP_ARROW)) {
    ship5.addSpeed(0.2, ship3.rotation);
    ship5.changeAnimation(SHIP_THRUST);
  } else {
    ship5.changeAnimation(SHIP_NORMAL);
  }

  if (keyWentDown('Enter')) {
    var bullet = createSprite(ship5.xpos, ship5.ypos);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10 + ship3.getSpeed(), ship3.rotation);
    bullet.life = 130;
    bullets.add(bullet);

  }


    
  //   if (keyDown(65)) {
  //   ship4.rotation -= 4;
  // }
  // if (keyDown(68)) {
  //   ship4.rotation += 4;
  // }

  // if (keyDown(87)) {
  //   ship4.addSpeed(0.2, ship4.rotation);
  //   ship4.changeAnimation(SHIP_THRUST2);
  // } else {
  //   ship4.changeAnimation(SHIP_NORMAL2);
  // }

  // if (keyWentDown('Space')) {
  //   var bullet2 = createSprite(ship4.position.x, ship4.position.y);
  //   bullet2.addImage(bulletImage2);
  //   bullet2.setSpeed(10 + ship4.getSpeed(), ship4.rotation);
  //   bullet2.life = 130;
  //   bullets2.add(bullet2);

  // }

  }
}  
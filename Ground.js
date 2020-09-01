class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic:true,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("trash.png")
    World.add(world, this.body);
  }
  display(){
    image(this.image,1000,390,100,100)
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.width, this.height);
    pop();
  }

};


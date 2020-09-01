class Trash {
  constructor(x, y, width, height) {
    var options = {
      isStatic:true,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("trash.png")
    World.add(world, this.body);
  }
  display(){
    image(this.image,700,200,230,200)
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER);
    stroke("white")
    fill("white");
    rect(0,0, this.width, this.height);
    pop();
  }

};

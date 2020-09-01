const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1,trash2,trash3;

var paper;

var ground;



function setup() {
    createCanvas(1200, 400);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    trash1 = new Trash(800,380,200,20);
    trash2 = new Trash(900,340,20,100);
    trash3 = new Trash(700,340,20,100);

    paper = new Paper(200,300);
    

    ground =  new Ground(600,400,1200,20)
  
}


function draw() {

  background(255);

  
  
    Engine.update(engine);
    ground.display();
    paper.display();
  trash1.display();
  trash2.display();
  trash3.display();

  

  
 
}


function keyPressed() {
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-450})
    }}

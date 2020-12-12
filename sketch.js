const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin, ballObject,ground	
var world;

 function preload()
 {
  dustbinimage=loadImage("dustbingreen.png");
  
 }

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,height,1200,20)
  ballObject = new Paper(100,600,30) 
  dustbin = new Dustbin(680,680,150,20)
  dustbin2 = new Dustbin(600,610,20,150)
  dustbin3 = new Dustbin(760,610,20,150)

  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  ground.display();
  ballObject.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();

  //ADDING IMAGE OF DUSTBIN
  image(dustbinimage,590,535,180,150);
  

 
}
 function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:50,y:-30});
  }
  
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}
var bob1,bob2,bob3,bob4,bob5;
var roof,roof1;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  bob1 = new Bob(780,400);
  bob2 = new Bob(790,400);
  bob3 = new Bob(800,400);
  bob4 = new Bob(810,400);
  bob5 = new Bob(820,400);
	roof = new Roof(800,200,300,30)
 // roof1 = new Roof(400,500,800,30)
  rope1= new Rope(bob1.body,roof.body,51*2,-10);
  rope2= new Rope(bob2.body,roof.body,52*3,-10);
  rope3= new Rope(bob3.body,roof.body,50*4,-10);
  rope4= new Rope(bob4.body,roof.body,48*5,-10);
  rope5= new Rope(bob5.body,roof.body,46*6,-10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 // roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}


function keyPressed(){
	if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50,y:-28});
    
	}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var wood1,ball1,ball2,ball3,ball4,ball5;
 var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    wood1 = new Wood(200,50,200,10);
	ball1= new Ball(160,150,30);
	ball1.scale=1.5;
	rope1= new Rope(ball1.body,{x:160,y:50});
	ball2= new Ball(180,150,30);
	ball2.scale=1.5;
	rope2= new Rope(ball2.body,{x:180,y:50});
	ball3= new Ball(200,150,30);
	ball3.scale=1.5;
	rope3= new Rope(ball3.body,{x:200,y:50});
	ball4= new Ball(220,150,30);
	ball4.scale=1.5;
	rope4= new Rope(ball4.body,{x:220,y:50});
	ball5= new Ball(550,150,30);
	ball5.scale=1.5;
	rope5= new Rope(ball5.body,{x:240,y:50});
	Engine.run(engine);
  
}


function draw() {
  
	rectMode(CENTER);
  background("white");
  
  
 
 
  wood1.display();
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();
  
  
  drawSprites();
 
}







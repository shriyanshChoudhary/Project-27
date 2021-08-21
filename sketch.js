
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(430,200,250,20);

	bob1 = new Bob(350,400,40);
	bob2 = new Bob(390,400,40);
	bob3 = new Bob(430,400,40);
	bob4 = new Bob(470,400,40);
	bob5 = new Bob(510,400,40);

	rope1 = new Rope(bob1.body,roof1.body,-80,0);
	rope2 = new Rope(bob2.body,roof1.body,-40,0);
    rope3 = new Rope(bob3.body,roof1.body,0,0);
	rope4 = new Rope(bob4.body,roof1.body,40,0);
	rope5 = new Rope(bob5.body,roof1.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}




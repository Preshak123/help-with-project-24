
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var rect1,rect2,rect3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  ground = new Ground(400,650,800,20);
	engine = Engine.create();
	world = engine.world;

	rect1=createSprite(400,630,100,20);
	rect1.shapeColor=color("red");
	rect2=createSprite(350,610,20,100);
	rect2.shapeColor=color("red");
	rect3=createSprite(450,610,20,100);
	rect3.shapeColor=color("red");


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 ground.display()
}




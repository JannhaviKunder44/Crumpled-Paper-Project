
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options = {isStatic : true};
    Ground = Bodies.rectangle(400,height,800,10,options);
	World.add(world,Ground);
	//Create the Bodies Here.
	Trash1 = new Trash();
	Paper1 = new Paper(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Trash1.display();
  Paper1.display();
  drawSprites();
  rectMode(CENTER);
 rect(Ground.position.x,Ground.position.y,800,10);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:50,y:-85})
	}
}




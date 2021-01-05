
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var ball1,ball2,ball3,ball4,ball5;
var rope1, rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var r = 20;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();

	ball1 = new Ball(320 , r);
	ball2 = new Ball(360 , r);
	ball3 = new Ball(400 , r);
	ball4 = new Ball(440 , r);
	ball5 = new Ball(480 , r);

	rope1 = new Rope(ground.body,ball1.body,-80)
	rope2 = new Rope(ground.body,ball2.body,-40)
	rope3 = new Rope(ground.body,ball3.body,0)
	rope4 = new Rope(ground.body,ball4.body,+40)
	rope5 = new Rope(ground.body,ball5.body,+80)

	Engine.run(engine);
  
}


function draw() {  
  background(100);

  rectMode(CENTER);
  ground.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  stroke(20);
  line(320,ground.body.position.y,ball1.body.position.x,ball1.body.position.y);
  line(360,ground.body.position.y,ball2.body.position.x,ball2.body.position.y);
  line(400,ground.body.position.y,ball3.body.position.x,ball3.body.position.y);
  line(440,ground.body.position.y,ball4.body.position.x,ball4.body.position.y);
  line(480,ground.body.position.y,ball5.body.position.x,ball5.body.position.y);

 
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		
		 if(ball1.body.position.x>300){
		  Matter.Body.applyForce(ball1.body,ball1.body.position,{y:-25,x:-32})
		 }
		 
			
	
		}


}




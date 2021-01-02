
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var Box1 , Box2 , Box3 , ground;
var paper;

function setup() {
	createCanvas(2000, 500);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,100,40);

	ground=createSprite(width/2, height-35, width,10,);
	ground.shapeColor=color(255);

    Box1 = createSprite(width/2 , height-50 , 200 , 20);
	Box1.shapeColor = color("red");

	Box2 = createSprite( 910 , height-110 , 20 , 100);
	Box2.shapeColor = color("red");

	Box3 = createSprite(1090, height-110 , 20 , 100);
	Box3.shapeColor = color("red");

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  paper.display();
}

function keyPressed(){
     if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.Body, paper.Body.position,{x:85,y:-85})
	 }

}


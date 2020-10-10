const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,tall1,tall2,collector;




function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	world = Engine.world;
	engine = Engine.create();

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	
	
    
tall1 = new Tall(400,650);
tall2 = new Tall(700,650);
	
	collector = new Collector();

	
	
	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  collector.display();
  tall1.display();
  tall2.display();
  drawSprites();
 
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false)
  packageBody.setScale = 0.7; 
  }
}




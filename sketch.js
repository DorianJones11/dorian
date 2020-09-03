var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var engineVar
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);


	Engine.run(engine);
	
	var ground_options={
        isStatic:true
      }
	
	  var packageSprite_options={
        restitution: 2.5
        
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, packageBody);
     
  }
}




















/*const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engineVar,worldVar,ground;
var ball

function setup()
{
    createCanvas(400,400);
    engineVar=Engine.create();
    worldVar=engineVar.world;
    var ground_options={
        isStatic:true
      }

    var ball_options={
        restitution: 2.5
    }

    ground=Bodies.rectangle(200,390,200,20,ground_options);
    World.add(worldVar,ground);
    
    ball=Bodies.circle(200,100,20,ball_options);
    World.add(worldVar,ball);

}
function draw()
{
    
    background(0); 
    Engine.update(engineVar); 
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}*/
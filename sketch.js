
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
	ground = new Ground(350,30,100,20)
	block1 = new Box (330,235,30,40)
	block2 = new Box (360,235,30,40)
	block3 = new Box (390,235,30,40)
	block4 = new Box (420,235,30,40)
	block5 = new Box (450,235,30,40)
	block6 = new Box (360,195,30,40)
	block7 = new Box (390,195,30,40)
	block8 = new Box (420,195,30,40)
	block9 = new Box (390,155,30,40)

	polygon = Bodies.circle(50,200,20)
	world.add(world.polygon)

	this.polygonI = loadImage('polygon.png')

	slingShot = new Slingshot(this.polygon,{x:100,y:200})

	imageMode(CENTER)
	image(polygonI,polygon.position.x,polygon.position.y,40,40)
	
	Engine.run(engine);
  
}


function draw() {
 
	Engine.update(engine);
	ground.display()
	
	block1.display()
	block2.display()
	block3.display()
	block4.display()
	block5.display()
	block6.display()
	block7.display()
	block8.display()
	block9.display()


  drawSprites();
 
}


function mouseDragged(){
    
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(bird.body);
    }
}
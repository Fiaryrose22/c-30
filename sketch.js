const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

function preload () {
  bg = loadImage("background.png")
 rabbit =loadImage("Rabbit-01.png")
 melon = loadImage("melon.png")
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  button= createImg("scissors.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)
  ground = new Ground(200,680,600,20);

  bunny = createSprite(250,600,100,100);
  bunny.addImage(rabbit);
  bunny.scale = 0.3

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  imageMode(CENTER)
  
}

function draw() 
{
  background(51);
  image(bg,width/2,height/2,500,700)
  rope.show(); 
  Engine.update(engine);
  ground.show();
  
  image(melon,fruit.position.x,fruit.position.y,60,60)
  drawSprites()
   
}

function drop() {
  rope.break();
  fruit_con.detach();
  fruit_con = null;
}
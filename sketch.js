const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var box1,box2;
var ground;
var Pig1;
var Log1;
var back;
var Log5,chain;

function preload(){

  back=loadImage("sprites/bg.png");

}
function setup() {
  var canvas =createCanvas(1200,400);
  engine = Engine.create(); 
  world = engine.world;
  ground=new Ground(600,390,1200,20);

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  Pig1=new Pig(810,350);

  Log1=new Log(810,260,300,PI/2);

  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  Pig2=new Pig(810,220);

  Log2=new Log(810,180,300,PI/2);

  box5=new Box(810,160,70,70);

  Log3=new Log(760,120,150,PI/7);
  Log4=new Log(870,120,150,-PI/7);

  Bird1=new Bird(50,200,30,30)
  Log5=new Log(230,180,80,PI/2);

  chain=new Chain(Bird1.body,Log5.body);

  
}

function draw() {

  background(back);  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  Pig1.display();
  Log1.display();
  box3.display();
  box4.display();
  Pig2.display();
  Log2.display();
  box5.display();
  Log3.display();
  Log4.display();
  box4.display();
  Bird1.display();
  Log5.display();
  chain.display();

  

}
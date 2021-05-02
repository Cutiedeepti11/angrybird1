const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var ball;
var pig1;
var bird;

function setup(){
    var canvas = createCanvas(1100,550);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,540,2000,40);
    ball= new Ball(850,500,80,80);
    ball2= new Ball(650,500,80,80);

    pig1=new Pig(750,500,70,70);

}
function draw(){
    background("#add93f");
    Engine.update(engine);
   ground.display();
   ball.display();
   ball2.display();
   pig1.display();
}
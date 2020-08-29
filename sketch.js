const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var log;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,370,70,70);
    box2 = new Box(920,370,70,70);
    box3 = new Box(920,200,70,70);
    box4 = new Box(750,200,70,70);
    pig = new Pig (835,370);
    pig2 = new Pig (835,200);
    pig3 = new Pig (835,100);
    log = new Log(835,285,250,PI/2);
    log2 = new Log(835,200,250,PI/2);
    log3 = new Log(760,120,200,PI/4);
    log4 = new Log(910,120,200,PI/-4);
    ground = new Ground(600,380,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig.display();
    pig2.display();
    pig3.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
}
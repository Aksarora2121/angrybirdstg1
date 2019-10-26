const Engine = Matter.Engine;
const World = Matter.World;

const Bodies = Matter.Bodies;

var engine , world ;
var box1 , pig1 ; 
var box2;
var ground;


function setup(){

var Canvas = createCanvas(400,400);

engine = Engine.create();

world = engine.world ; 


box1 = new Box(200,300,50,50);


box2 = new Box(240,100,50,100);

ground = new Ground(200,height , 400 , 200);







}

function draw(){


    background(255);

box1.display();


box2.display();


ground.display();






}






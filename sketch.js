const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var drop;

function preload() {
  backgroundImg = loadImage("sprites/bg.jpg");
  
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  cloud = new Cloud(100,50,150,130);
  cloud1 = new Cloud(250,40,180,90);
  cloud2 = new Cloud(400,50,140,110);
  cloud3 = new Cloud(550,40,160,100);
  cloud4 = new Cloud(700,50,190,120);
  cloud5 = new Cloud(490,100,170,140);

  drop = new Rain(399,60,70);
  drop1 = new Rain(399,60,70);
  drop2 = new Rain(399,60,70);
  drop3 = new Rain(399,60,70);
  drop4 = new Rain(399,60,70);
  drop5 = new Rain(399,60,70);
  drop6 = new Rain(399,60,70);
  drop7 = new Rain(399,60,70);
  drop8 = new Rain(399,60,70);
  drop9 = new Rain(399,60,70);
  drop10 = new Rain(399,60,70);
  drop11 = new Rain(399,60,70);
  drop12 = new Rain(399,60,70);

  drop13 = new Rain(399,60,70);
  drop14 = new Rain(399,60,70);
  drop15 = new Rain(399,60,70);
  drop16 = new Rain(399,60,70);
  drop17 = new Rain(399,60,70);

  drop17 = new Rain(399,60,70);
  drop18 = new Rain(399,60,70);
  drop19 = new Rain(399,60,70);
  drop20 = new Rain(399,60,70);
  drop20 = new Rain(399,60,70);
  drop21 = new Rain(399,60,70);
  drop22 = new Rain(399,60,70);

  

  
  
  

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  
  cloud.display();
  cloud1.display();
  cloud2.display();
  cloud3.display();
  cloud4.display();
  cloud5.display();

  /* if(drop.body.position.y > 400){
    drop.body.position.x = 30;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop1.body.position.y > 400){
    drop.body.position.x = 60;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop2.body.position.y > 400){
    drop.body.position.x = 90;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop3.body.position.y > 400){
    drop.body.position.x = 120;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop4.body.position.y > 400){
    drop.body.position.x = 150;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop5.body.position.y > 400){
    drop.body.position.x = 180;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop6.body.position.y > 400){
    drop.body.position.x = 210;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop7.body.position.y > 400){
    drop.body.position.x = 240;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop8.body.position.y > 400){
    drop.body.position.x = 270;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop9.body.position.y > 400){
    drop.body.position.x = 300;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop10.body.position.y > 400){
    drop.body.position.x = 330;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop11.body.position.y > 400){
    drop.body.position.x = 360;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop12.body.position.y > 400){
    drop.body.position.x = 390;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop13.body.position.y > 400){
    drop.body.position.x = 420;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop14.body.position.y > 400){
    drop.body.position.x = 200;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop15.body.position.y > 400){
    drop.body.position.x = 450;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop16.body.position.y > 400){
    drop.body.position.x = 200;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop17.body.position.y > 400){
    drop.body.position.x = 480;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop18.body.position.y > 400){
    drop.body.position.x = 510;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop19.body.position.y > 400){
    drop.body.position.x = 540;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop20.body.position.y > 400){
    drop.body.position.x = 570;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop21.body.position.y > 400){
    drop.body.position.x = 600;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  }
  if(drop22.body.position.y > 400){
    drop.body.position.x = 640;
    drop.body.position.y = 30;
    Matter.Body.setVelocity(drop.body,{x:0, y:5});
  } */
  

  
  drop.display();
  drop1.display();
  drop2.display();
  drop3.display();
  drop4.display();
  drop5.display();
  drop6.display();
  drop7.display();
  drop8.display();
  drop9.display();
  drop10.display();

  drop11.display();
  drop12.display();
  drop13.display();
  drop14.display();
  drop15.display();
  drop16.display();
  drop17.display();
  drop18.display();
  drop19.display();
  drop21.display();
  drop20.display();
  drop22.display();
 

 
  
}
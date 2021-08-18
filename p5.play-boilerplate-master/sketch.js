
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var balls = [];
var plinkos = [];
var divisions = [];


var score = 0;

var gameState = "PLAY";
var count = 0;
var line;

var ball;
var divisionHeight = 300;

function preload() {

}


function setup() {
  createCanvas(800,700);
  
  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(400,690,800,20);

  for(var k = 0; k <=width; k=k +80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 75; j<= width ; j = j +50) {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 50; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75; j<= width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 50; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  

 // Engine.run(engine);



}




function draw() {
  background(0,0,0);  
  drawSprites();


  textSize(35);
  text("score :"+ score,20,40);
  fill(255);
  textSize(30);
  text("500", 10,550);
  text("500", 85,550);
  text("500", 165,550);
  text("500", 245,550);
  text("100", 325,550);
  text("100", 405,550);
  text("100", 485,550);
  text("200", 565,550);
  text("200", 645,550);
  text("200", 725,550);

  if(gameState == "END"){
    background("black");
    fill("red");
    textSize(100);
    text("GAMEOVER",200,400);
  }

  Engine.update(engine);
  ground.display();

  for(var k = 0;k < plinkos.length;k++) {
    plinkos[k].display();
  }

  
 // console.log(particle.body.position.x);
  if(ball!=null) {
    ball.display();
        
    if(ball.body.position.x > 760){
      
      if(ball.body.position.y < 300){
        score = score +500;
        ball = null;
      }
    }

    if(ball.body.position.x > 301 && ball.body.position.x < 600){
      score = score + 100;
      ball = null;
    }

    if(ball.body.position.x > 601 && ball.body.position.x < 900) {
      score = score + 100;
      ball=null;
    }
    }




  for(var n = 0; n<divisions.length; n++){
    divisions[n].display();
  }

  /*if(frameCount%60 === 0){
    particles.push(new Ball(random(width/2-200, width/2+200),10,10));
  }*/

 /* for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }*/
  

}

function mousePressed() {
  if(gameState !== "END") {
    ball = new Ball(mouseX, 10, 10, 10);
    console.log(mouseX)
  }
}
  



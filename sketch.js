var Engine = Matter.Engine,
 World = Matter.World,
 Events=Matter.Events,
 Bodies = Matter.Bodies;
var balls =[];
var Plinko=[];
var divisions=[];
var engine;
var world;
var Ground;
var divisionsHeight = 300
var count=0;
var score=0;
var gameState="start"
var ball;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
Ground=new ground(width/2,height,width,20);
for ( var j =40; j<=width; j=j+50)
{
Plinko.push(new plinko(j,75))
}
for ( var j =15; j<=width-10; j=j+50)
{
Plinko.push(new plinko(j,175))
}
for ( var j =40; j<=width; j=j+50)
{
Plinko.push(new plinko(j,275))
}
for ( var j =15; j<=width-10; j=j+50)
{
Plinko.push(new plinko(j,375))
}
for(var k=0;k<=width;k=k+80)
{
  divisions.push(new divison(k,height-divisionsHeight/2,10,divisionsHeight))
}





}

function draw() {
  background(25,55,65);  
  fill ("black");
textSize(20);
text("500",15,550)
text("500",100,550)
text("500",180,550)
text("500",260,550)
text("100",340,550)
text("100",440,550)
text("100",520,550)
text("200",600,550)
text("200",680,550)
text("200",762,550)
text('Score :'+score,20,40);
  Engine.update(engine)
Ground.display();
/*if(frameCount%60===0){
  balls.push(new partical(random(width/2-10,width/2+10),10,10))
}
for(var j=0;j<balls.length;j++){
  balls[j].display();
  }*/
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var i=0;i<Plinko.length;i++){
    Plinko[i].display();
  }
  if(ball!=null){
    ball.display();
  
if(ball.body.position.y>760){
if(ball.body.position.x<300){
  score=score+500
  ball=null
  if(count>=5)gameState="end";
}
else if(ball.body.position.x>301){
  score=score+100
  ball=null
  if(count>=5)gameState="end";
}
else if(ball.body.position.x>601){
  score=score+200
  ball=null
  if(count>=5)gameState="end";
}
} 
}
if ( gameState =="end") {
    
  textSize(80);
  text("Game Over", 150, 250);

}


}

function mousePressed(){
if(gameState!=="end"){
count++;
  ball=new partical(mouseX,10,10,10);
}

}
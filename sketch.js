var fixedRect, movingRect;
var gameobject1,gameobject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(10, 100, 50, 80);

  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(700, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameobject1 = createSprite(400,100,50,100)

gameobject2 = createSprite(400,600,50,50)
gameobject2.shapeColor = "white"
  gameobject1.shapeColor = "white"


  movingRect.velocityX= -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  
gameobject2.y = mouseY
gameobject2.x = mouseX
 bounceOff(movingRect,fixedRect);



 if(isTouching(gameobject1,gameobject2)){

  gameobject2.shapeColor = "blue"
  gameobject1.shapeColor = "blue"
 }
 else{
  gameobject2.shapeColor = "white"
  gameobject1.shapeColor = "white"
 }


  drawSprites();
}



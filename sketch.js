var fixedRect, movingRect;
var m1
var m2
var m3
var m4


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  m1 = createSprite(100,100,60,60)
  m2 = createSprite(200,100,60,60)
  m3 = createSprite(300,100,60,60)
  m4 = createSprite(400,100,60,60)

  m1.shapeColor = " green"
  m2.shapeColor = " green"
  m3.shapeColor = " green"
  m4.shapeColor = " green"
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,m1)){
    movingRect.shapeColor ="red";
    m1.shapeColor = "red";
  } else{
    movingRect.shapeColor = "green";
    m1.shapeColor = "green";
  }
  
  
  drawSprites();
}



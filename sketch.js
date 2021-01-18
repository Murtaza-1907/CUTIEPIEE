var moving;
var fixed;
var object1,object2,object3,sound;
function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 40,40);
  fixed = createSprite(102,390,200,10)
  object1 = createSprite(308,390,200,10)
  object2 = createSprite(513,390,200,10)
  object3 = createSprite(715,390,200,10)
  object1.shapeColor="black"
  object2.shapeColor="green"
  object3.shapeColor="cyan"
  
}

function draw() {
  background("yellow");  
  moving.shapeColor = "blue"
  fixed.shapeColor = "red"
  moving.x = World.mouseX
  moving.y = World.mouseY
  if(isTouching(moving,object2)){
    moving.shapeColor="green"
  }
  if(isTouching(moving,fixed)){
    moving.shapeColor = "red"
  }
  if(isTouching(moving,object3)){
    moving.shapeColor = "cyan"
  }
  if(isTouching(moving,object1)){
    moving.shapeColor = "black"
  }
  
  drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&obj2.x-obj1.x<obj1.width/2+obj2.width/2&&
    obj1.y-obj2.y<obj1.height/2+obj2.height/2&&obj2.y-obj1.y<obj1.height/2+obj2.height/2){
   return true
  }
else
{
  return false
}
}
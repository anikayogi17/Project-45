var girl, snowflake, bg
var girlImg, snowflakeImg
var snowGroup;
var score = 0

function preload(){
girlImg = loadImage("girl.png")
snowflakeImg = loadImage("snowflake.PNG")
bg = loadImage("snowbg.jpeg")

}

function setup() {
  createCanvas(800,400);
  girl = createSprite(400, 300, 50, 50);
  girl.addImage("girl", girlImg)
  girl.scale = 0.12
  snowGroup = new Group();
}

function draw() {
  background(bg);  
  createSnow()
  if(snowGroup.isTouching(girl)){
   snowGroup.destroyEach()
   score = score + 50
    }

  //if (frameCount % 40 === 0) {
   // snowflake = createSprite(random(0, 800), 0, 100, 100);
   // snowflake.addImage("snow", snowflakeImg)
   // snowflake.scale = 0.17
   // snowflake.velocityY = 6;
  //}
  //snowGroup.add(snowflake)

  //for (var i = 0; i < snowGroup.length; i++) {
    //if (snowGroup.get(i).isTouching(girl)) {
     //  snowGroup.get(i).destroy();
   
   // }
  //}

 // if(snowGroup.isTouching(girl)){
  //  snowGroup.destroy
  //}
  

  if(keyDown(LEFT_ARROW)){
    girl.x -= 10
  }
  if(keyDown(RIGHT_ARROW)){
    girl.x += 10
  }
 
  drawSprites();
  textSize(20)
  fill("white")
  text("Score: " + score, 75, 50)
}

function createSnow(){
  if (frameCount % 40 === 0) {
    snowflake = createSprite(random(0, 800), 0, 100, 100);
    snowflake.addImage("snow", snowflakeImg)
    snowflake.scale = 0.17
    snowflake.velocityY = 6;
    snowGroup.add(snowflake)
  }
}
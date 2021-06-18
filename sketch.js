var PLAY = 1;
var END = 0;
var gameState = PLAY;

var garden,rabbit;
var gardenImg,rabbitImg;
var carrot,carrotImg,




function preload (){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  carrotImg = loadImage("carrot.png")
}

function setup (){
  
  createCanvas(400,400);
  

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
Rabbit.addImage(rabbitImg,"rabbit.png");
garden.depth  = rabbit.depth
rabbit.depth = rabbit.depth +1


// Moving background
garden=createSprite(400,400);
Garden.addImage(gardenImg);
garden.y  = ground.width/2




carrot = createSprite(200,100,20,20)
carrotImg.addImage(carrotImg,"carrotImg.png")
carrot.scale = 0.001





}






function draw() {
background(0)
if (gameState === PLAY){

garden.velocityY = +2
 if (garden.x > 400){
 garden.height /2}

 
 rabbit.x = mouse.x
  edges= createEdgeSprites();
  rabbit.collide(edges);
 if (carrot.collide(rabbit))
 {
   Text("score = score",50,50,20,20)
   score  = +1
 }
spawnCarrot ()


}


  drawSprites();
}
function spawnCarrot() {

  if (frameCount %70 === 0){
    carrot = createSprite (random(50,350),200,10,10)
   carrot.addImage(carrot,carrotImg)
    car
    carrot.velocityY = +2
    garden.depth = carrot.depth
    carrot.depth  = garden.depth +1
 
 
  }
}




var climber,climberImage;
var door, doorImage;
var ghost,ghostImage;
var tower, towerImage;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var invisibleblockGroup,climberGroup,doorGroup;
var invisibleblock;
var dieSound;
function preload (){
towerImage = loadImage("tower.png");
ghostImage = loadImage("ghost-standing.png");
doorImage = loadImage("door.png");
climberImage = loadImage("climber.png");
dieSound = loadSound("spooky.wav");
} 


function setup(){
createCanvas(600,600);
tower = createSprite(300,300,20,20);
tower.addImage(towerImage);
tower.velocityY = 1;
  ghost = createSprite(200,200,15,15);
  ghost.addImage(ghostImage);
  ghost.scale = 0.3;
  invisibleblockGroup = new Group();
  climberGroup = new Group();
  doorGroup = new Group();
  dieSound.loop();
}


function draw(){
background("black");
if(gameState === PLAY ) {
if(tower.y >500) {
tower.y = 300;
}
  if(keyDown("right")) {
  ghost.x = ghost.x + 2;
  }
  if(keyDown("left")) {
  ghost.x = ghost.x - 2;
  }
  if(keyDown("space")){
  ghost.velocityY = -10
  }
  ghost.velocityY = ghost.velocityY + 0.5;
  spawnDoors();
  if(ghost.isTouching(climberGroup)) {
  ghost.velocityY = 0;
  }
  if(ghost.isTouching(invisibleblockGroup)|| ghost.y>600) {
  gameState = END;
  }
drawSprites();
}
if(gameState === END){
textSize(30);
fill("red");
text("GAMEOVER",300,300)
  
}
}
function spawnDoors(){
if(frameCount %200 ===0){
door = createSprite(200,-50,50,50)
door.addImage(doorImage);
  door.velocityY = 1;
climber = createSprite(200,10,30,30);
climber.addImage(climberImage);
climber.velocityY = 1;
invisibleblock = createSprite(200,15,20,20);
invisibleblock.velocityY = 1;
door.x = Math.round(random(120,400))
climber.x = door.x;
invisibleblock.x = door.x;
invisibleblock.visible = false;
ghost.depth = door.depth;
ghost.depth = ghost.depth + 1;
doorGroup.add(door);
  climberGroup.add(climber);
  invisibleblockGroup.add(invisibleblock)
  
}
}
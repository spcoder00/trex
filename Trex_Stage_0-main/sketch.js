var trex,trex_running,trex_collided;
var ground,invisible_ground,ground_image;

function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
trex_collided=loadImage("trex_collided.png");
ground_image=loadImage("ground2.png");

}

function setup(){
createCanvas(600,200);


// create a trex sprite
trex = createSprite=(50,180,20,50);
trex.addAnimation("running", trex_running);
trex.scale=0.5;


// create ground sprite
ground=createSpritr(200,180,400,20);
ground.addImage("ground",ground_image);
ground.x=ground.width/2;
ground.velocityX = -4;


// creating invisible ground
invisible_ground=createSprite(200,190,400,10)
invisible_ground.visible = false;


}

function draw(){
background(220); 
// grey colour shown above
console.log (trex.y)
if (keyDown("space") &&  trex.y >=100){
   trex.velocityY= -10

    
}
trex.velocityY=trex.velocityY+0.8


if(ground.x <0){
ground.x=ground.width/2;

}

trex.collide(invisible_ground)

drawSprites();




}

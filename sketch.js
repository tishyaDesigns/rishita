var ball,cup;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10;
var cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20;
var cardboard21,cardboard22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,cardboard28,cardboard29,cardboard30
var tries =0;
var gameState= "level1";

function preload(){
  jerryImg = loadImage("player.png");
  o1Img = loadImage("obstacle.png");
  o2Img = loadImage("obstacle2.png");
  o3Img = loadImage("obstacle3.png");
  cupImg = loadImage("cup.png")
}

function setup(){
createCanvas(800,750);  
 ball = createSprite(8,8,20,20);//ball
 ball.addImage(jerryImg);
 ball.scale = 0.09;
 ball.debug=true;
 ball.setCollider("rectangle",0,0,ball.width,ball.height);
 cup = createSprite(760,725,10,80);//the cup at the end
 cup.addImage(cupImg);
 cup.scale = 0.09;
 cardboard1 = createSprite(50,80,200,40);
 cardboard2 = createSprite(240,90,40,180);
 cardboard3 = createSprite(100,280,200,40);
 cardboard4 = createSprite(100,400,40,200);
 cardboard5 = createSprite(200,180,260,40);
 cardboard6 = createSprite(290,260,40,200);
 cardboard7 = createSprite(200,450,40,200);
 cardboard8 = createSprite(300,530,200,40);
 cardboard9 = createSprite(260,680,40,100);
 cardboard10 = createSprite(100,620,200,40);
 cardboard11 = createSprite(80,720,40,160);
 cardboard12 = createSprite(380,440,200,40);
 cardboard13 = createSprite(470,520,40,200);
 cardboard14 = createSprite(420,180,200,40);
 cardboard15 = createSprite(700,520,300,40);
 cardboard16 = createSprite(700,570,40,140);
 cardboard17 = createSprite(700,100,40,200);
 cardboard18 = createSprite(540,300,300,40);
 cardboard19 = createSprite(600 ,740,40,160);
 cardboard20 = createSprite(480,80,300,40);
 cardboard21 = createSprite(700,280,40,180);
 cardboard22 = createSprite(240,620,200,40);
 cardboard23 = createSprite(700,230,260,40)
 cardboard24 = createSprite(484,20,40,80)   
 cardboard25 = createSprite(510,680,220,40)
 
 obsGrp = new Group();
}

function draw() {
  background("blue");
  fill("green");
  text(mouseX+","+mouseY,mouseX,mouseY);
  edges = createEdgeSprites();
  ball.bounceOff(edges);
  ball.velocityX=0;
  ball.velocityY=0;
  fill("red")
  if (obsGrp.isTouching(cardboard1) || obsGrp.isTouching(cardboard2) || obsGrp.isTouching(cardboard3) || obsGrp.isTouching(cardboard4) 
    ||obsGrp.isTouching(cardboard5) || obsGrp.isTouching(cardboard6) || obsGrp.isTouching(cardboard7) || obsGrp.isTouching(cardboard8)
    ||obsGrp.isTouching(cardboard9) || obsGrp.isTouching(cardboard10) || obsGrp.isTouching(cardboard11) || obsGrp.isTouching(cardboard12)
    ||obsGrp.isTouching(cardboard13) || obsGrp.isTouching(cardboard14) || obsGrp.isTouching(cardboard15) || obsGrp.isTouching(cardboard16) 
    ||obsGrp.isTouching(cardboard17) || obsGrp.isTouching(cardboard18) || obsGrp.isTouching(cardboard19) || obsGrp.isTouching(cardboard20)
    ||obsGrp.isTouching(cardboard21) || obsGrp.isTouching(cardboard22) || obsGrp.isTouching(cardboard23) || obsGrp.isTouching(cardboard24)
    ||obsGrp.isTouching(cardboard25)) {
    obsGrp.setVelocityXEach(random(-3,3));
    obsGrp.setVelocityYEach(random(-3,3));
    }
  obsGrp.bounceOff(cardboard1);
  obsGrp.bounceOff(cardboard2);
  obsGrp.bounceOff(cardboard3);
  obsGrp.bounceOff(cardboard4);
  obsGrp.bounceOff(cardboard5);
  obsGrp.bounceOff(cardboard6);
  obsGrp.bounceOff(cardboard7);
  obsGrp.bounceOff(cardboard8);
  obsGrp.bounceOff(cardboard9);
  obsGrp.bounceOff(cardboard10);
  obsGrp.bounceOff(cardboard11);
  obsGrp.bounceOff(cardboard12);
  obsGrp.bounceOff(cardboard13);
  obsGrp.bounceOff(cardboard14);
  obsGrp.bounceOff(cardboard15);
  obsGrp.bounceOff(cardboard16);
  obsGrp.bounceOff(cardboard17);
  obsGrp.bounceOff(cardboard18);
  obsGrp.bounceOff(cardboard19);
  obsGrp.bounceOff(cardboard20);
  obsGrp.bounceOff(cardboard21);
  obsGrp.bounceOff(cardboard22);
  obsGrp.bounceOff(cardboard23);
  obsGrp.bounceOff(cardboard24);
  obsGrp.bounceOff(cardboard25);
  
   if(tries===25){
    swal(
      {
        title: `Game Over!!!`,
        text: "You Tried 25 Times",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
         }
      }
    );
   } 
  if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -5;
  }
  if (keyDown(DOWN_ARROW)) {
    ball.velocityY=5;
    ball.velocityX=0;
  }
  if (keyDown(LEFT_ARROW)) {
    ball.velocityX=-5;
    ball.velocityY=0;
  }
  if (keyDown(RIGHT_ARROW)) {
    ball.velocityX=5;
    ball.velocityY=0;
  }

  if (ball.isTouching(cardboard1) || ball.isTouching(cardboard2) || ball.isTouching(cardboard3) || ball.isTouching(cardboard4) 
    ||ball.isTouching(cardboard5) || ball.isTouching(cardboard6) || ball.isTouching(cardboard7) || ball.isTouching(cardboard8)
    ||ball.isTouching(cardboard9) || ball.isTouching(cardboard10) || ball.isTouching(cardboard11) || ball.isTouching(cardboard12)
    ||ball.isTouching(cardboard13) || ball.isTouching(cardboard14) || ball.isTouching(cardboard15) || ball.isTouching(cardboard16) 
    ||ball.isTouching(cardboard17) || ball.isTouching(cardboard18) || ball.isTouching(cardboard19) || ball.isTouching(cardboard20)
    ||ball.isTouching(cardboard21) || ball.isTouching(cardboard22) || ball.isTouching(cardboard23) || ball.isTouching(cardboard24)
    ||ball.isTouching(cardboard25)|| ball.isTouching(obsGrp)) {
    
    ball.x=10;
    ball.y=10;
    tries++;
  }
    
                  
if (ball.isTouching(cup) && gameState == "level1") {
  textSize(26)
  stroke("black")
  strokeWeight(8)
  fill("white")
  text("YOU PASSED LEVEL 1",500,410);
  text("Press Space to Continue",495,440);
  if(keyDown("space")){
  gameState = "level2";
  reset();
  }
}   

if (ball.isTouching(cup) && gameState == "level2") {
  textSize(26)
  stroke("black")
  strokeWeight(8)
  fill("white")
  text("YOU PASSED LEVEL 2",500,410);
  text("Press Space to Continue",495,440);
  if(keyDown("space")){
  gameState = "level3";
  reset();
  }
 
} 
if(gameState === "level2" || gameState === "level3"){
  obstacles();
}
if (ball.isTouching(cup) && gameState == "level3") {
   gameState = "end";
} 

  drawSprites();
  if(gameState === "end"){
  textSize(40)
  stroke("black")
  strokeWeight(8)
  fill("white")
  text("YOU WIN",400,400);
  }
  textSize(25);
  text("Tries: "+tries,360,25);
  if(gameState == "level1"){
    text("LEVEL 1", 555,25);
  }else if(gameState == "level2"){
    text("LEVEL 2", 555,25);
  }else if(gameState == "level3"){
    text("LEVEL 3", 555,25);
  }
}

function obstacles(){
  if(gameState == "level2"){freq = 200;}
  if(gameState == "level3"){freq = 100;}
  if(frameCount%freq === 0){
     var obs = createSprite(random(50,750), random(50,750),50,50);
       if(obs.x< 400){
          if(obs.y>400){
          obs.velocityX = 3;
          obs.velocityY = -1;
         }else{
          obs.velocityX = 4;
          obs.velocityY = 1;
         }
      }else{
          if(obs.y>400){
              obs.velocityX = -2;
              obs.velocityY = -4;
             }else{
              obs.velocityX = -2;
              obs.velocityY = 3;
             }
      }
      var rand = Math.round(random(1,3));
        switch(rand){
          case 1: obs.addImage(o1Img);
          obs.scale = 0.1;
          break;
          case 2: obs.addImage(o2Img)
          obs.scale = 0.1;
          break;
          case 3: obs.addImage(o3Img);
          obs.scale = 0.1;
          break;
          default: break;
      }
    
      obs.lifetime = 400;
      obsGrp.add(obs);
  }
}
  
  function reset(){
      obsGrp.destroyEach();
      ball.x = 10;
      ball.y = 10;
      tries = 0;
   
    }
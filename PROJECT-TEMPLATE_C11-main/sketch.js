var gary , crey;
var ataque ,  atqueIMGD , ataque2 , ataqueIMG2
var fafas , lalau
var chao , chaoIMG
var GIMG , GIMGE



function preload(){
ataqueIMG = loadImage("imported piskel (3).gif");
ataqueIMG2 = loadImage("imported piskel (4).gif");
fafas = loadImage("Gparada.png");
lalau = loadImage("lalau.png");
chaoIMG = loadImage("começo.jpg");
GIMG  = loadImage("Gataque.png");
GIMGE  = loadImage("GataqueE.png");
} 


function setup(){
  createCanvas(1365,650);
  gary = createSprite(100,435,10,10);
  gary.addImage(fafas);
  //gary.scale = 0.5;
  crey = createSprite(500,435,10,10);
  crey.addImage(lalau);
  crey.scale = 0.5;
  ataque = createSprite(1, 1, 1, 1);
  ataque.addImage(ataqueIMG);
  ataque.visible = false 
  ataque.scale = 0.2
  ataque2 = createSprite(1, 1, 1, 1);
  ataque2.addImage(ataqueIMG2);
  ataque2.visible = false 
  ataque2.scale = 0.2
  gary.debug = true;
  crey.debug = true;
  ataque.debug = true;
  chao = createSprite(630,565,1500,200);
  chao.visible = false 


}

function draw() {
  background(chaoIMG);
  /*if(keyDown("w")){
    gary.y=gary.y-7 ;
  }*/
   if(keyDown("d")){
    gary.x=gary.x+7 ;
  }
   if(keyDown("a")){
    gary.x=gary.x-7 ;

  }
   /*if(keyDown("s")){
    gary.y=gary.y+7 ;
}*/
if(keyDown(RIGHT_ARROW)){
    ataque.visible = true
    taque.x = gary.x + 30;
    ataque.y = gary.y;
    gary.addImage(GIMG);
  }
  else{
    ataque.visible = false 
    gary.addImage(fafas);
  }
  if(keyDown(LEFT_ARROW)){
    ataque2.visible = true
    ataque2.x = gary.x - 30;
    ataque2.y = gary.y;
    gary = addImage(GIMGE);
  }
  else{
    ataque2.visible = false 
    gary.addImage(fafas);
  }
  if (keyDown("space")) {
    gary.velocityY = -8;
  }
  if (ataque.isTouching(crey)) {
    crey.destroy();
  }
  gary.velocityY = gary.velocityY + 0.8;
  gary.collide(chao);
  crey.collide(chao);
  gary.collide(crey);
      drawSprites();
}
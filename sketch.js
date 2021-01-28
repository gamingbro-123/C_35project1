// var balloonImg;
var balloon;
var balloonImg;Z  
var balloonImg2;
var database;
var balloonImage2;
var balloon2;

function preload()
{
  balloonImg = loadImage("Hot Air Ballon-01.png");
  balloonImg2 = loadAnimation("Hot Air Ballon-02.png");
  

}

function setup() {
  createCanvas(800,500);
  balloon = createSprite(200,100,50,50);
  balloon2 = createSprite(100,30,10,10);


  database = firebase.database();

  var balloonref = database.ref("balloon/position");
  balloonref.on("value",readData)

}

function draw() {
  background(255,255,255);

 balloon.addImage("Hot Air Ballon-01.png",balloonImg);

 balloon2.addAnimation("Hot Air Ballon-02.png",balloonImg2);

 var balloonPosition=database.ref("balloon/position");
 balloonPosition.on("value",changePosition);

  
  

  if(keyDown(LEFT_ARROW)){
    balloon2.x = balloon2.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon2.x = balloon2.x +10;
}
else if(keyDown(UP_ARROW)){
   balloon2.y = balloon2.y -10;
}
else if(keyDown(DOWN_ARROW)){
  balloon2.y = balloon2.y +10;
}  

// balloon.display();
//   balloon2.display();
  

  
  // readPosition();
  // updateWeight();
  // readHeight();
  // ShowError();


  drawSprites();
  
}

function changePosition(x,y){
  balloon.x = balloon.x + x;
  balloon.y = balloon.y + y;

  database.ref("balloon/position").set({x:balloon.x,y:balloon.y})
}

function readData(DATA)
{
  var position = DATA.val();
  balloon.x = position.x;
  balloon.y = position.y;
  }

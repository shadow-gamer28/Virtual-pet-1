//Create variables here
var dog, happydog;

var database;
var foodS, foodStock, position;

function preload()
{
  dogImg = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png")
	//load images here
}

function setup() {
	createCanvas(800, 800);

  dog = createSprite(400,500,5,5);
  dog.addImage(dogImg)
  dog.scale = 0.4;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  stroke(225)
  textSize(30);
  stroke("red");

  text("Note : press UP_ARROW to feed dog" + foodS, 150,40);

  stroke(255);
textSize(40);
fill("blue");
textFont("algerian");
text("food: " + foodS,200,200);
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}





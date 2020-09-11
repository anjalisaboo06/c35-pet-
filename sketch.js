var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
var buttonFeed, buttonAdd;
var feedTime, lastFed;
var foodObj;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");

  
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1000,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 

  foodObj= new Food();

   buttonFeed = createButton('Feed dog',);
   buttonFeed.position(500, 150);
   buttonFeed.mousePressed(feedDog);

   buttonAdd = createButton('Add food');
   buttonAdd.position(600, 150);
buttonAdd.mousePressed(addFood);

}

// function to display UI
function draw() {
  background(46,139,87);
 
  foodObj.display();

feedTime = database.ref('lastFed');
feedTime.on('value', function(data){lastFed=data.val();})
stroke("black");
  if(lastFed>=12){
    text("Last Feed : " + lastFed%12+ " PM", 200, 30);
    }
    else if(lastFed==0){
      text("Last Feed : 12AM", 350, 30);
    }
    
    else{
      text("Last Feed"+ lastFed+ "AM", 200, 30);
    }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
 





}


//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })



}


function addFood(){

foodS = foodS+1;

database.ref('/').update({Food:foodS})
}

function feedDog(){

foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({Food:foodObj.getFoodStock(), lastFed:hour()})
dog.addImage(dogImg1);
}


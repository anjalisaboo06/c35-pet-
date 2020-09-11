class Food{
    constructor(){
this.image = loadImage("Images/Milk.png");
this.foodStock = 0;
this.lastFed;
    }


       
     updateFoodStock(foodStock){
     this.foodStock=foodStock;
    
     }
     

     getFoodStock(){

        return this.foodStock;
     }

     deductFood(){
     if(this.foodStock>0){
     
         this.foodStock = this.foodStock-1;
     
     }
     }

display(){
var x = 300, y=100;
imageMode(CENTER);
image(this.image, 700, 220, 70, 70);
console.log(this.foodStock);
if(this.foodStock!=0){

    for(var i = 0; i<foodStock; i++){
    if(i%10==0){
    x = 300;
    y=100+50;
    
    }
    this.image(this.image, x, y, 50, 50);
    x = x+30;
    
    }
    
    }

}


}
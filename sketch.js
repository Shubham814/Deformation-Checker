var car,wall;

var weight,speed;

function setup() {
  createCanvas(1400,400);
 
 //creating car
 car = createSprite(100,height/2,40,40);


 //creating wall
  wall = createSprite(1300, 200, 60, height/2);

  //defining speed and weight
  speed=random(55,90);
  weight=random(400,1500)
}

function draw() {
  background("black");  
  
  //making car velocity
  car.velocityX = speed;

//making collison and change color when deform
if (wall.x-car.x<wall.width/2 + car.width/2){
 car.velocityX=0;
 var deformation = 0.5*weight*speed*speed/22500
 if (deformation>180){
   car.shapeColor="red";
 }

 if (deformation<180  &&  deformation>100){
  car.shapeColor="yellow";
}

if (deformation<100){
  car.shapeColor=color(0,255,0);
}



 

}

//make car over the wall
wall.depth=car.depth;
car.depth=car.depth+1;



  drawSprites();
}
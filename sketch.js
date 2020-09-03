var car,wall
var weight,speed

function setup(){ 
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,60,height/2)
}

function draw(){
  createCanvas(1600,400)

  speed = random(55,90)
  weight = random(400,1500)

car.velocityX = speed;

if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX = 0
  var deformation = 0.5*weight*speed*speed/22509
}

if(deformation>180){
  car.shapeColor("black")
  car.velocityX = 0
}

if(deformation<180 && deformation>100){
  car.shapeColor("orange")
  car.velocityX = 0
}

if(deformation<100){
   car.shapeColor("blue")
   car.velocityX = 0
}


  drawSprites()
}
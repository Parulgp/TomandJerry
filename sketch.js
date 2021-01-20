var bckground, bckgroundImage;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bckgroundImage=loadImage("images/garden.png");
    catImg1= loadAnimation("images/tomOne.png");
    catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg3= loadAnimation("images/tomFour.png");
    mouseImg1=loadAnimation("images/jerryOne.png");
    mouseImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    
    //create cat and mouse sprites here
    cat=createSprite(870, 400, 10, 10);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale = 0.2;
    mouse=createSprite(200, 400, 10, 10);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.15
   
}

function draw() {
createCanvas(1000, 600);
    background(bckgroundImage);
    //Write condition here to evalute if cat and mouse collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("jerryTeasing", mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("jerryTeasing");

}

}


var database;
var gameState=0
var playerCount;
var form,game,player;
var allPlayers;
var car1,car2,car3,car4,carA;
var car1img,car2img,car3img,car4img,trackimg,groundimg;

function preload(){
car1img = loadImage("car1.png")
car2img = loadImage("car2.png")
car3img = loadImage("car3.png")
car4img = loadImage("car4.png")
trackimg = loadImage("track.jpg")
groundimg = loadImage("ground.png")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30); 

    database=firebase.database()
    game = new Game();
    game.getState();
    game.Start();

    
}

function draw(){
    background("white");
    if(playerCount===4){
game.update(1)

    }
   if(gameState===1){
clear()
game.play()

   } 
if(gameState===2){
game.end()

}

}


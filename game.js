class Game{
  constructor(){}
  getState(){
  var gameStateref = database.ref('gameState')
  gameStateref.on("value",function(data){
  gameState = data.val()
})
}

 update(state){
 database.ref('/').update({
 gameState: state
})
}

 Start(){
 if(gameState===0){
 player = new Player()
 player.getCount()
 form = new Form()
 form.display();
}
car1=createSprite(100,200);
car1.addImage(car1img)
car2=createSprite(300,200);
car2.addImage(car2img)
car3=createSprite(500,200);
car3.addImage(car3img)
car4=createSprite(700,200);
car4.addImage(car4img)
carA=[car1,car2,car3,car4]
 }
play(){
form.hide()
textSize(30)
text("Game Start",120,100)
Player.getplayerinfo()
if(allPlayers !== undefined){
  background(groundimg)
  image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
  //var display_position = 130;
  var index=0;
  var x=175;
  var y;
  for(var plr in allPlayers){
    index=index+1;
    x=x+200;
    y=displayHeight-allPlayers[plr].distance
    carA[index-1].x=x
    carA[index-1].y=y
    if (index === player.index){
    carA[index-1].shapeColor="red"
    camera.position.x=displayWidth/2;
    camera.position.y=carA[index-1].y

    }
  

}
}
if(keyIsDown(UP_ARROW) && player.index !== null){
  player.distance +=50
  player.update();
}
if(player.distance>3800){
gameState=2;

}
drawSprites()
}
end(){
 console.log("gameOver") 
}
} 

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form,player,game;


function setup () {
    canvas =  createCanvas(500,500); 
    database = firebase.database();

    game = new Game();
  game.getState();
  game.start();
    
}

function draw (){
    background("skyblue");

    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
}













//  var hypnoticalBall , database;
//  var position

// function setup(){
//  database = firebase.database();

//     createCanvas(500,500);
//     hypnoticalBall = createSprite(250,250,10,10);
//     hypnoticalBall.shapeColor = "red";

//     var  hypnoticalBallPosition = database.ref("ball/position");
//     hypnoticalBallPosition.on("value", readPosition, showError);

// }

// function draw(){
//     background("white");
//     if(keyDown(LEFT_ARROW)){
//         writePosition(-1,0);
//     }
//     else if(keyDown(RIGHT_ARROW)){
//         writePosition(1,0);
//     }
//     else if(keyDown(UP_ARROW)){
//         writePosition(0,-1);
//     }
//     else if(keyDown(DOWN_ARROW)){
//         writePosition(0,+1);
//     }
//     drawSprites();
// }


// function writePosition(x,y){

//     database.ref("ball/position").set({
//         'x': position.x+x,
//         'y': position.y+y
//     })

//     //hypnoticalBall.x = hypnoticalBall.x + x;
//     //hypnoticalBall.y = hypnoticalBall.y + y;
// }


// function readPosition (data) {
//     position = data.val();

//     hypnoticalBall.x = position.x;
//     hypnoticalBall.y = position.y;
// }

//  function showError (){
//     console.log("error");
// }
var playerPaddle, computerPaddle, ball;
var paddle1, paddle2, ballImage, bg;
var edges;
var paddleGroup;
var playerScore, computerScore;

function preload(){
    paddle1=loadImage("B1.png")
    paddle2=loadImage("B2.png")
    ballImage=loadImage("Ball2.png")
    bg=loadImage("TT.png")
}

function setup(){
    playerPaddle = createSprite(375, 200, 10, 70);
    computerPaddle = createSprite(20, 200, 10, 70);
    ball = createSprite(200,200,10,10);
    playerPaddle.addImage("B1",paddle1);
    playerPaddle.scale=0.4;
    computerPaddle.addImage("B2",paddle2);
    computerPaddle.scale=0.4;

    ball.addImage("Ball2.png", ballImage);
    ball.scale=0.4;

    //Agrega a ambas paletas al grupo de paletas - C28
    paddleGroup=new Group();
    paddleGroup.add(playerPaddle);
    paddleGroup.add(computerPaddle);
    
    
    
    
    playerScore=0;
    computerScore=0;

    edges=createEdgeSprites();
}

function draw(){
    background(bg);
    drawnet(20)

    textSize(15);
    fill("black");
    text("Presiona la barra espaciadora para iniciar el juego.",30,150)

    // Muestra la puntuación - C28
    text(computerScore,150,30);
    text(playerScore,250,30);
    
    
    
    
    //ball.bounceOff(edges[1]);
    //ball.bounceOff(edges[0]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[2]);

    // La pelota rebota de ambas paletas al usar un grupo - C28
    ball.bounceOff(paddleGroup);

    // Agregar movimiento a la paleta
    playerPaddle.y=mouseY;
    computerPaddle.y=ball.y;

    if(keyDown("space")){
          
         ball.velocityX = 6;
         ball.velocityY = 6;
    }
  
    // Reinicia la pelota en el centro cuando sale de la pantalla y aumenta la puntuación - C28
    if(ball.x>400 || ball.x<0){
        if(ball.x>400){
            computerScore=computerScore+1
        }
        if(ball.x<0){
            playerScore=playerScore+1
        }
        // Posiciona la pelota en el centro
        ball.x=200
        ball.y=200
        // Vuelve a la pelota estacionaria
        ball.velocityX=0
        ball.velocityY=0             
    }
    
    drawSprites();
}

        
function drawnet(num){
    for(var i=0; i<num; i++){
        line(200, 20*i, 200, 10+20*i);
    }
}

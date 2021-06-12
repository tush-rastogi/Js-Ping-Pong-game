// let canvas=document.querySelector('#canvas');
  
let play=document.querySelector("#play");
let stop=document.querySelector("#stop");
//  let ctx;
let paddle1,paddle2,paddle1Y=250,paddle2Y=250,paddle2speed=4,player1=0,player2=0;
let ballX,ballY,ballspeedX=4,ballspeedY=4;


 let clicked=false;
 
  play.addEventListener('click',()=>{

           clicked=true;

  });

  stop.addEventListener('click',()=>{
      clicked=false;
  })

  function setup()
  {
       let canvas=createCanvas(800,500);
         
          canvas.parent('canvas');
            
           background('green');
             textSize(20);
            text(`Player 1 :${player1}`,150,20);
            text(`Player 2 : ${player2}`,590,20);
          
           paddle1=rect(0,250,15,100); 
             
           paddle2=rect(785,paddle2Y,15,100);

           ballX=random(30,600);
           ballY=random(15,450);
        
             line(400,0,400,500);
           
             ellipse(ballX,ballY,20,20);

              


  }

  function draw(){

    if(clicked)
    {
        
    
        background('green');
        textSize(20);
       
        text(`Player 1 :${player1}`,150,20);
        text(`Player 2 : ${player2}`,590,20);
        ellipse(ballX,ballY,20,20);
      

    line(400,0,400,500)
    
     paddle1=rect(0,250,15,100); 
             
    paddle2=rect(785,paddle2Y,15,100);
      
          

          paddle2Y+=paddle2speed;
            ballX+=ballspeedX;
            ballY+=ballspeedY;

          if(paddle2Y>400||paddle2Y<0)
           paddle2speed*=-1;
    
    
    
          if(ballX>790||ballX<10)
          {
              ballspeedX*=-1;
          }
    
            if(ballY<10||ballY>490)
            {
                ballspeedY*=-1;
            }
    
    
    
    
    
    
        }
}
   
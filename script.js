// let canvas=document.querySelector('#canvas');
  
let play=document.querySelector("#play");
let stop=document.querySelector("#stop");
//  let ctx;
let paddle1,paddle2,paddle1Y=250,paddle2Y=250,paddle2speed=4,player1=0,player2=0,paddle1X=0,paddle2X=785;
let ballX,ballY,ballspeedX=7,ballspeedY=6,paddle1speed=8;


 let clicked=false;
 
  play.addEventListener('click',()=>{

           clicked=true;

  });

  stop.addEventListener('click',()=>{
      clicked=false;
  });

  function setup()
  {
       let canvas=createCanvas(800,500);
         
          canvas.parent('canvas');
            
           background('green');
           
             textSize(20);
            text(`Player 1 :${player1}`,150,20);
            text(`Player 2 : ${player2}`,590,20);
          
           paddle1=rect(paddle1X,paddle1Y,15,100); 
             
           paddle2=rect(paddle2X,paddle2Y,15,100);

           ballX=Math.floor(random(30,600));
           ballY=Math.floor(random(15,450));
        
             line(400,0,400,500);
           

            circle(ballX,ballY,20);

            // frameRate(40);

              


  }

  function draw(){

    if(clicked)
    {
        
    
        background('green');
        line(400,0,400,500);
        circle(ballX,ballY,20);
        textSize(20);
       
        text(`Player 1 :${player1}`,150,20);
        text(`Player 2 : ${player2}`,590,20);
        
        //   ballspeedX=random(3,7);
        //   ballspeedY=random(1,4);
     

           
    
     paddle1=rect(paddle1X,paddle1Y,15,100); 
             
      paddle2=rect(paddle2X,paddle2Y,15,100);
      
          

          paddle2Y+=paddle2speed;
          
            ballX+=ballspeedX;
            
            ballY+=ballspeedY;

          if(paddle2Y>=400||paddle2Y<=0)
           paddle2speed*=-1;
    
         
           


           if(ballX>=790||ballX<=11)
           {
               ballspeedX*=-1;
           }
     
             if(ballY<=11||ballY>=489)
             {
                 ballspeedY*=-1;
             }
             
    
         
             paddleMovement();



          
    

          if(ballX>=0&&ballX<=25&&(ballY>=paddle1Y&&ballY<=paddle1Y+50))
          {
              ballspeedX*=-1;
              
                if(ballspeedY>0)
                ballspeedY*=-1;

              
          }
        

          if(ballX>=0&&ballX<=25&&(ballY>=paddle1Y+50&&ballY<=paddle1Y+102))

          {
              ballspeedX*=-1;
              
               if(ballspeedY<0)
                ballspeedY*=-1;

          }


          if(ballX>=785&&ballX<=800&&(ballY>=paddle2Y&&ballY<=paddle2Y+50))
          {
              ballspeedX*=-1;
              
                if(ballspeedY>0)
                ballspeedY*=-1;
                
                
              
            
          }
        


          if(ballX>=785&&ballX<=800&&(ballY>=paddle2Y+50&&ballY<=paddle2Y+102))
          {
              ballspeedX*=-1;
              
               if(ballspeedY<0)
                ballspeedY*=-1;

          }

        //   if(ballX<20&&ballY>=paddle1Y&&ballY<=paddle1Y<=100)
        //   ballspeedX*=-1;
            
           console.log(ballX,ballY);
    

             if(ballX>=800)
             {
                 ballX=Math.floor(random(700,750));
             }
    

               if(ballX<=0)
               {
                ballX=Math.floor(random(15,20));
               }

               if(ballY>=500)
               {
                ballY=Math.floor(random(450,400));
                
               }
    
               if(ballY<=0)
               {
                ballY=Math.floor(random(15,20));
               }

            }


    }
    
    function paddleMovement()
    {
                
           
          if(paddle1Y<=1)
          keyCode=DOWN_ARROW;

           if(paddle1Y>=400)
          keyCode=UP_ARROW;
          
        
        
        
        
        
        if(keyCode===UP_ARROW)
        {
             paddle1Y-=paddle1speed;
        }


          if(keyCode===DOWN_ARROW)
         {
             paddle1Y+=paddle1speed;
         }


         
     }


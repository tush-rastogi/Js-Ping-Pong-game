let play=document.querySelector("#play");
let stop=document.querySelector("#stop");

// variables names are self-descriptive....

let paddle1,paddle2,paddle1Y=250,paddle2Y=250,paddle2speed=8,player1=0,player2=0,paddle1X=0,paddle2X=785;
let ballX,ballY,ballspeedX=8,ballspeedY=8,paddle1speed=8;

 
 let clicked=false;
 
  play.addEventListener('click',()=>{// game starts when user click on the play button

           clicked=true;

  });

  stop.addEventListener('click',()=>{  // game stops when user click on stop button and both player scores resets to 0.
      clicked=false;
 
       player1=0;
       player2=0;
  });

  function setup() // this function will execute only once when program starts 
  {
       
      // initial setup of game
    
       let canvas=createCanvas(800,500);
         
          canvas.parent('canvas');
            
          background('#282828');
           
             textSize(20);
            text(`Player 1 : ${player1}`,150,20);
            text(`Player 2 : ${player2}`,590,20);
          
           paddle1=rect(paddle1X,paddle1Y,15,100); 
             
           paddle2=rect(paddle2X,paddle2Y,15,100);

           ballX=Math.floor(random(30,600));
           ballY=Math.floor(random(15,450));
        
             line(400,0,400,500);
              
             stroke('white');
             strokeWeight(4);
                    
            circle(ballX,ballY,20);

            // frameRate(40);

              


  }

  function draw(){  // this function continue repeats itself by default this function calls 60 times in 1 sec
 
   
   
      if(clicked) // execute only when user clicked play button..
    {
        
    
        background('#282828'); // 
        line(400,0,400,500);
        stroke('white');
        strokeWeight(4);
        circle(ballX,ballY,20);
        textSize(20);
       
        text(`Player 1 : ${player1}`,150,20);
        text(`Player 2 : ${player2}`,590,20);
        
        //   ballspeedX=random(3,7);
        //   ballspeedY=random(1,4);
     

           
    
     paddle1=rect(paddle1X,paddle1Y,15,100); 
             
      paddle2=rect(paddle2X,paddle2Y,15,100);
      
          

          paddle2Y+=paddle2speed;
          
            ballX+=ballspeedX;
            
            ballY+=ballspeedY;

          if(paddle2Y>=400||paddle2Y<=0) // to reverse the direction of paddle when it strikes to top and bottom of canvas
           paddle2speed*=-1;
    
         
           

         //  to reverse the direction of ball when ball strikes the left and right boundary of canvas
           if(ballX>=790||ballX<=11)
           {
               ballspeedX*=-1;
               

                 if(ballX>=790) // when ball strikes to the right wall of canvas player1 score increases by one every time..
                 player1++;

                 else
                 player2++;
             
           }
          // to reverse the direction of ball when  ball strikes the top and bottom of the canvas..
             if(ballY<=11||ballY>=489)
             {
                 ballspeedY*=-1;
                
             }
             
    
         
             paddleMovement(); // left paddle controller



          
             // for left paddle 
            // when ball strikes the upper half of the left paddle
          if((ballY>=paddle1Y-10&&ballY<=paddle1Y+50)&&ballX>=0&&ballX<=25)
          {
              ballspeedX*=-1;
              
                if(ballspeedY>0)  // if ball strikes the upper half of the paddle it bounce back in upward direction
                ballspeedY*=-1;

              
          }
        
  // when ball strikes the lower half of the left paddle
         else if((ballY>=paddle1Y+50&&ballY<=paddle1Y+100)&&ballX>=0&&ballX<=25)

          {
              ballspeedX*=-1;
              
               if(ballspeedY<0) // if ball strikes the lower half of the paddle it bounce back in downward direction
                ballspeedY*=-1;

          }

            // for right paddle 
            // when ball strikes the upper half of the right  paddle
          if((ballY>=paddle2Y-10&&ballY<=paddle2Y+50)&&ballX>=785&&ballX<=800)
          {
              ballspeedX*=-1;
              
                if(ballspeedY>0) // if ball strikes the upper half of the paddle it bounce back in upward direction
                ballspeedY*=-1;
                
                
              
            
          }
        

          // when ball strikes the lower half of the right paddle 
          else if((ballY>=paddle2Y+50&&ballY<=paddle2Y+100)&&(ballX>=785&&ballX<=800))
          {
              ballspeedX*=-1;
              
               if(ballspeedY<0)  // if ball strikes the lower half of the paddle it bounce back in downward direction
                ballspeedY*=-1;

          }

      
          // console.log(ballX,ballY);
    
             // to prevent the ball from going inside the canvas....
              
             if(ballX>=797)
             {
                 ballX=Math.floor(random(780,784));
             }
    

               if(ballX<=2)
               {
                ballX=Math.floor(random(16,20));
               }

               if(ballY>=495)
               {
                ballY=Math.floor(random(480,485));
                
               }
    
               if(ballY<=7)
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
          
        
        
        
        
        
        if(keyCode===UP_ARROW)  // left paddle moves upward on clicking up arrow...
        {
             paddle1Y-=paddle1speed;
        }


          if(keyCode===DOWN_ARROW) // left paddle moves  downward on clicking down arrow..
         {
             paddle1Y+=paddle1speed;
         }


          // any other key can be used to halt the movement of left paddle ..
      

     }


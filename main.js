leftWristX =0;
leftWristY =0;
rightWristX =0;
rightWristY =0;
mp3="";
score=0;
scoreRightWrist=0;
function preload(){
mp3=loadSound("music.mp3");

}

function setup(){
   canvas=createCanvas(600,500);
   canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier= ml5.poseNet(video , modalLoaded);
   classifier.on('pose',got_result);
 }
 function modalLoaded(){
   console.log("Modal Loaded");
 }

 function got_result(results){
if (results.length>0) {
   console.log(results);
   scoreRightWrist=results[0].pose.keypoints[10].score;
score=results[0].pose.keypoints[9].score;
console.log(score);
   leftWristX=results[0].pose.leftWrist.x;
   leftWristy=results[0].pose.leftWrist.y;
   console.log("leftWristX="+leftWristX+",leftWristY="+leftWristy);
   scoreaRightwrist=results[0].pose.keypoints[10].score;

   rightWristX=results[0].pose.rightWrist.x;
   rightWristy=results[0].pose.rightWrist.y;
   console.log("rightWristX="+rightWristX+",rightWristY="+rightWristy);
}
 }


function draw(){
   image(video,0,0,600,500);
   fill("#FF0000")
   stroke("#FF0000")

   if (scoreRightWrist >0.2) {
     circle(leftWristX,leftWristY,20);
   
     if ( rightWristY >0 && rightWristY <=100)
      {
     document.getElementById("speed").innerHTML ="speed = 0.5x";
     song.rate(0.5);  
     }

     else if(rightWristY >100 && rightWristY <=200)
     {
       document.getElementById("speed").innerHTML ="speed = 1x";
       song.rate(1);  
     }

     else if(rightWristY >200 && rightWristY <=300)
     {
       document.getElementById("speed").innerHTML ="speed = 1.5x";
       song.rate(1.5);  
     }

     else if(rightWristY >200 && rightWristY <=400)
   {
     document.getElementById("speed").innerHTML ="speed = 2x";
     song.rate(2);  
   }

   else if(rightWristY >200 && rightWristY >=400)
   {
     document.getElementById("speed").innerHTML ="speed = 2.5x";
     song.rate(2.5);  
   }
   }

   

  
 
   
   if (score >0.2)
    {
   circle(leftWristX,leftWristY,20);
   InNumberleftWristY=Number(lrftWristY);
   remove_decimals=floor(InNumberleftWristY);
   volume=remove_decimal/500;
   document.getElementById("Volume").innerHTML = "Volume =" +volume;
   song.setVolume(volume); 
   }
}



song="";
function play(){
  mp3.play(); 
  mp3.setVolume(0.5);
  mp3.rate(0.5);
}
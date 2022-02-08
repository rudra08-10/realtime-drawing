nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,430);
    canvas.position(560,90);

    poseNet=ml5.poseNet(video,modelloded);
    poseNet.on('pose',gotResults);
}
 function draw()
 {
     background('#AAFF00');
     fill('#0000FF');
     stroke('#0000FF');
     square(nosex,nosey,difference);
 }

 function modelloded()
 {
     console.log('model is loaded');
 }
 function gotResults(results)
 {
     if(results.length>0)
     {
         console.log(results);
         nosex=results[0].pose.nose.x;
         nosey=results[0].pose.nose.y;
         console.log("nosex= "+nosex+"nosey= "+nosey);

         leftwristx=results[0].pose.leftWrist.x;
         rightwristx=results[0].pose.rightWrist.x;
         difference=floor(leftwristx-rightwristx);
     }
 }
 
/*
This is a witch filter that can turn anyone into a witch!
*/

let video,
    noseX,
    noseY,
    eyeX,
    eyeY,
    img1,
    img2;

function preload() {
  img1 = loadImage('hat.png');
  img2 = loadImage('glasses.png');//
  
}

function setup() {
  createCanvas(600, 500);
  video = createCapture(VIDEO);
  video.size(600,500);
  video.hide();
  
  let poseFinder = ml5.poseNet(video);
  poseFinder.on("pose", gotPose);
}

function draw() {
  background(220);
  image(video,0,0,600,500);

  noStroke();
  fill(255,0,0);
  //ellipse(noseX,noseY,40);
  image(img1, noseX-100, noseY-250, img1.width, img1.height);
  image(img2, eyeX-90, eyeY-30, img2.width/5, img2.height/5);

}  
function gotPose(poses){
  noseX = poses[0].pose.nose.x;
  noseY = poses[0].pose.nose.y;
  
  eyeX = poses[0].pose.leftEye.x;
  eyeY = poses[0].pose.leftEye.y;
  //consloe.log(noseX);
}
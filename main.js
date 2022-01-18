noseX = 0;
noseY = 0
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.position(150, 140)
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(750, 140);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background('#FF10F0');
    fill('#00ef0f');
    stroke('#00ef0f');
    text("Jeshna Varun Java",noseX,noseY);
    textSize(difference);
    
    document.getElementById('squareSides').innerHTML= "Side of the square will be : " + difference + "px";
}

function modelLoaded() {
    console.log("Model Is Loaded");
}

function gotPoses(result,error) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);   
    } else {
        console.error(error);
    }
}

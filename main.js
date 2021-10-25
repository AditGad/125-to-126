song1 = "";
song2 = "";

function preload(){
song1 = loadSound("music.mp3");
song2=loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modalloaded);
    posenet.on("pose",getposes);
}
function modalloaded(){
console.log("posenet is intialized")
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
}

//loadPixels for video doesn't work with p5js versions above 0.6.1 last time I checked
//so it won't work with the latest versions

var capture;
var vScale = 16;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  //creates a seperate canvas for video
  capture = createCapture(VIDEO);
  capture.size(width/vScale, height/vScale);
}


function draw(){
  //load canvas pixels and video pixels
  loadPixels();

  //this doesn't work in latest versions
  //I honestly don't know why they removed this functionality, or if it's a bug
  capture.loadPixels();

  for(var y=0; y<capture.height; y++){
    for(var x=0; x<capture.width; x++){

      var index = (x + y * capture.width)*4;

      //assign canvas pixel rgb values according to video's rgb values
      var r = capture.pixels[index+0];
      var g = capture.pixels[index+1];
      var b = capture.pixels[index+2];

      var bright = (r + g + b)/3
      fill(bright);
      rect(x*vScale, y*vScale, vScale, vScale);
    }
  }
}
//loadPixels for video doesn't work with p5js versions above 0.6.1 last time I checked
//so it won't work with the latest versions

var capture;
var vScale = 16;

function setup() {
  createCanvas(800, 600);
  pixelDensity(1);
  noStroke();

  //creates a seperate canvas for video
  capture = createCapture(VIDEO);
  capture.size(width/vScale, height/vScale);
  capture.hide();
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

      //render rectangles based on avg brightness of corresponding video block
      // rect(x*vScale, y*vScale, vScale, vScale);

      //map the beightness of a block to it's size
      // var mapSize = map(bright, 0, 255, 0, vScale);
      // rect(x*vScale, y*vScale, mapSize, mapSize);

      //rect change size taking their middle as the center
      // rectMode(CENTER);

      //use random() to create a shaking effect
      // ellipse(x*vScale, y*vScale, vScale*random(0.8, 1.2), vScale*random(0.4, 1.6));
      triangle(x*vScale, y*vScale, x*vScale + vScale, y*vScale*random(0.9, 1.1), x*vScale*random(0.9, 1.1), y*vScale + vScale);
    }
  }
}

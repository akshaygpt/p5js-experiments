var circle = [];
var spce;

function setup(){
  createCanvas(800, 800);
  background(color(18, 6, 16));

  circles = [];
  space = 50;

  for (var i = -2 * space ; i <= (width) + space; i += space) {
      for (var j = -2 * space ; j <= (height) + space; j += space) {
          circles.push(new Circle(i, j));
      }
  }
}

function draw(){
  fill(color(36, 12, 32), 255);
  rect(0, 0, width, height);

  for(c in circles){
    circles[c].update();
    circles[c].draw();
  }
}

function Circle(x, y){
  this.cx = x;
  this.cy = y;
  this.rT = 500;
  this.offset = random(-PI/8, PI/8);
  this.size = 50;
  this.rx, this.ry;
}

Circle.prototype.update = function(){
  var t = millis()/this.rT;

  t += cos(abs(1-(this.cx/(width/2))))*TWO_PI;
  t += cos(abs(1-(this.cx/(height/2))))*TWO_PI;
  t += this.offset;

  this.rx = sin(t) * this.size;
  this.ry = this.rx;
}

Circle.prototype.draw = function(){
  if (this.rx > 0 && this.ry > 0) {
      noStroke();
      fill(color(227, 223, 210));
      ellipse(this.cx, this.cy, this.rx, this.ry);
  }
}

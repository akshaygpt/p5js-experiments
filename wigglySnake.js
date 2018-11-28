var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // stroke(255, 255, 255);
}

function draw() {
  background(240);

  ellipse(mouseX, mouseY, 60, 60);

  for (var i = 0; i < circles.length; i++) {
  	circles[i].move();
    circles[i].display();
  }

  //maximum number of circles allowed
  if (circles.length > 30) {
  	circles.shift();
  }

}

function mouseMoved() {
  var d = 60;

  //random color generator
  var c = color(100, 100+random(155), 100, 100);
  tint(128);

  //speed at which circles decrease in size
  var s = 3;
	var newCircle = new DrawCircle(mouseX, mouseY, d, c, s);

  //time interval
  setInterval(circles.push(newCircle), 100);
}

function DrawCircle( x, y, d, c, s ) {
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
	this.color = c;
  this.speed = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  display: function() {
    fill(this.color);
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
  },

  move: function() {
    if(this.diameter > 0 && this.diameter < 100){
			this.diameter -= this.speed;
    }
	}
}

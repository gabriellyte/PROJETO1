function setup() {
  createCanvas(1000, 800);
  background("rgb(255,112,203)");
}

function draw() {
  fill("pink");
stroke("black");
  if (mouseIsPressed)
  circle(mouseX, mouseY,50);
}

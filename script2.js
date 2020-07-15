var r, g, b, randomSize;

function setup(){
  createCanvas(800, 500);
  background(0);  
}

// function mouseDragged(){
//   noStroke();
//   fill(r, g, b);
//   r= random(0, 256);
//   g= random(0, 256);
//   b= random(0, 256);
//   ellipse(mouseX, mouseY, randomSize);
//   randomSize = random(1, 100)
// }

function mouseDragged(){
  noStroke();
  fill(r, g, b);
  r= random(0, 256);
  g= random(0, 256);
  b= random(0, 256);
  ellipse(mouseX, mouseY, randomSize);
  randomSize = random(1, 100)
}


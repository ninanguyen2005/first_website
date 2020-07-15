

function setup(){
  createCanvas(800, 500);
  background(255, 0, 166);
  noStroke();
  fill(221, 97, 255);
  rect(200, 200, 400, 100)
 
}

function draw(){
  if(mouseX > 200 && mouseX < 600 && mouseY > 200 && mouseY < 300 && mouseIsPressed){
    background(221, 97, 255)
    fill(255, 0, 166);
    rect(200, 200, 400, 100);
    
    fill(0)
    textSize(60);
    text("REEEEEE", 250, 260);
  }
  else {
    setup();
  }
}
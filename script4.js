var GameOn, lives, score, yPos
var line1_x, line1_y, line1_length;
var line2_x, line2_y, line2_length;
var decreaseLength_1,decreaseLength_2

function setup(){
  createCanvas(400, 400);
  frameRate(75);
  background(250, 223, 150);
  GameOn= true;
  lives = 3;
  score = 0;
  yPos = 200;
  
  line1_x = 240;
  line1_y = random(100, 350)
  line1_length = random(20, 320);
  
  line2_x = 340;
  line2_y = random(100, 350)
  line2_length = random(20, 320);
  decreaseLength_1 = 1
  decreaseLength_2 = 1
}

function draw(){
  if(GameOn){
    background(250, 223, 150);
    noStroke();
    fill(255, 137, 97);
  
    
  
    if(lives == 3){
      ellipse(30, 30, 30)
      ellipse(30, 70, 30)
      ellipse(30, 110, 30)

      
    }
    else if(lives == 2){
      ellipse(30, 30, 30)
      ellipse(30, 70, 30)
    }
    else if(lives == 1){
      ellipse(30, 30, 30)
    }
    else{
      GameOn = false
    }
    rect(180, 15, 200, 60, 60)
    fill(0)
    textSize(32)
    text("Score: " + score, 220, 55);
    
    fill(255, 0, 0)
    ellipse(100, yPos, 30, 30)
    
    if(keyIsPressed && (keyCode==UP_ARROW || key=="w")){
      yPos -= 10;
    }
    else if(keyIsPressed && (keyCode==DOWN_ARROW || key=="s")){
      yPos += 10;
    }
    if(yPos >= 385){
      yPos = 385;
    }
    else if(yPos <= 15){
      yPos = 15;
    }
        
    stroke(0);
    strokeWeight(4);
    
    line(line1_x, line1_y, line1_x + line1_length, line1_y);
    line(line2_x, line2_y, line2_x + line2_length, line2_y);
    
    line1_x = line1_x-decreaseLength_1;
    line2_x = line2_x-decreaseLength_2;
    
    if(line1_x < 0-line1_length){
      line1_x = 400
      line1_y = random(50, 350)
      line1_length = random(50, 350)
      decreaseLength_1 += 0.5 
      lives--
    }
    if(line2_x < 0-line2_length){
      line2_x = 400
      line2_y = random(50, 350)
      line2_length = random(50, 350)
      decreaseLength_2 += 0.5 
      lives--
    }
    if(line1_y < yPos + 15 && line1_y > yPos - 15){
      if(line1_x < 115 && line1_x+line1_length > 85){
        line1_x=400
        score++
        line1_y=random(100,350)
        line1_length=random(20,320)
        decreaseLength_1 += 0.5
      }
    }
     if(line2_y < yPos + 15 && line2_y > yPos - 15){
      if(line2_x < 115 && line2_x+line2_length > 85){
        line2_x=400
        score++
        line2_y=random(100,350)
        line2_length=random(20,320)
        decreaseLength_2 += 0.5
      }
  }
  }
  else{
    background(250, 223, 150);
    noStroke()
    fill(255, 137, 97)
    rect(50, 100, 300, 200, 60)
    fill(250, 223, 150)
    rect(70, 120, 260, 56, 60)
    rect(70, 200, 260, 75, 60)
    fill(0)
    textSize(32)
    text('Score: '+score, 130, 160)
    text('Restart :3', 130, 250)
  }
  
  if(mouseIsPressed){
    if(mouseX > 70 && mouseX < 330 && mouseY > 200 && mouseY < 275){
      setup();
    }
  }
}


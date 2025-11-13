let particles = [];
let randomX,randomY
let timer = 0
let interval = 20


function setup() {
  createCanvas(800, 800);

  for(let i = 0; i < particles.length; i++) {
    particles[1].display();
    particles[1].update();
  }
}


function draw() {
  background(0);

  randomX = random(-20, -16);
  randomY = random(10,790);

  if(millis() - timer > interval) {
    particles.push(new Square(randomX, randomY))
    timer = millis(1);

  }
  for(let i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].update();
  }

}

class Square {
  
  constructor(tx, ty){
    this.tx = tx;
    this.ty = ty;

  }
  display() {
    rect(this.tx, this.ty, 20)
    strokeWeight(1);
    stroke(random(255), random(255), random(255));
    noFill();

  }
  update() {
    this.tx++;
    if (keyIsPressed){
    this.tx++;
   }
  }

}




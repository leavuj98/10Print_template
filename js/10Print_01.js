let x = 0;
let y = 0;
let size = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let i = color('rgb(235,29,226)');
  background(i);
}

function draw() {
  let c = color("rgb(154,86,250)");
  let a = color("red");
    let b = color("rgb(236,176,228)");
  strokeWeight(2);
  let r = random(3);

  if (r < 1) {
    fill(a);
    stroke (255);
    ellipse(x, y, size);
    //line(x, y, x+size, y+size);
  } else if(r < 2){
    //line(x, y+size, x+size, y);
    fill(c);
    rect(x, y, size);
  } else if(r < 3) {
    fill (b)
    triangle (x,y,x + size ,y - size, x + size,y + size);
  } 
    

  x += size;
  if (x > width) {
    x = 0;
    y = y + size;
  }
}
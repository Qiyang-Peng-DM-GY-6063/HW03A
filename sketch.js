let backColor;
let d;

function setup() {
  backColor = color(233, 218, 72);
  d = 30;

  createCanvas(windowWidth, windowHeight);

  background(backColor);

  for (let x = 0 + 30; x < width - 30; x += 60) {
    for (let y = 0 + 30; y < height - 30; y += 60) {
      if (d == 30) {
        push();
        noStroke();
        fill(0);
        circle(x, y, 30);
        d = 15;
        pop();
      } else {
        push();
        noStroke();
        fill(0);
        circle(x, y, 15);
        d = 30;
        pop();
      }
    }
  }
}

function draw() {}

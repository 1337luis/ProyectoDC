function setup()
{
  createCanvas(600, 600, WEBGL);
}

function draw()
{
	smooth();
  background(255);

  rotateX(mouseY * -0.005);
  rotateY( mouseX * -0.005);
  stroke(255,0,255); fill(0,255,0);
  box(300);
  stroke(0,255,255); fill( 255,0,0 );
  sphere(215);
}

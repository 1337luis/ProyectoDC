var drawing = true;
function setup()
{
  createCanvas(640, 480);
  translate(width / 2, height / 2);
  drawRose(8, 5);

}


function drawRose( n, d )
{
	clear();
	var k = n / d;

    beginShape();
    stroke(0);
    noFill();
    strokeWeight(1);
    for (var a = 0; a < TWO_PI * d; a += 0.02) {
      var r = 200 * cos(k * a);
      var x = r * cos(a);
      var y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
}

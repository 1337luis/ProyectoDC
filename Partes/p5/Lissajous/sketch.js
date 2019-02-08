const WIDTH = 640;
const HEIGHT = 480;

var a = 0, b = 0;
var vA = 9, vB = 8;
var radius = 200;
var isDrawing = true;
var loops = 0;

function setup() {
  createCanvas( WIDTH, HEIGHT );
  smooth();
}

function draw()
{
	var initialA = pX( a, radius );
	var initialB = pY( b, radius );
	if( isDrawing )
	{
		initialA = pX( a, radius );
		initialB = pY( b, radius );
		a += vA;
		b += vB;
		line( initialA, initialB, pX( a, radius ), pY( b, radius ) );
		loops++;
	}
	if( loops >= 360 ) isDrawing = false;
}

function pX( ang, rad )
{
	return Math.cos( PI * ang / 180 ) * rad + ( WIDTH / 2 );
}

function pY( ang, rad )
{
	return Math.sin( PI * ang / 180 ) * rad + ( HEIGHT / 2 );
}

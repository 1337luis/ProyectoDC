const WIDTH = 800;
const HEIGHT = 450;

var floor = true;
var isAlive = true;
var velocity = 4;
var enemPosX = WIDTH;
var enemFloor = true;
var ecR = 255, ecG = 0, ecB = 0;
var points = 0;

function setup()
{
	createCanvas( WIDTH, HEIGHT );
}

function draw()
{
	//LIMPIAR ESCENA CADA FRAME
	if( isAlive )
	{
		clear();

		//DIBUJAR PERSONAJE
		fill( 255, 0, 255 );
		circle( 50, floor ? ( ( HEIGHT - HEIGHT / 3 ) - 20 ) : ( HEIGHT / 3 + 20 ), 20 );

		//DIBUJAR ENEMIGO
		fill(ecR,ecG,ecB);
		square( enemPosX, enemFloor ? ( ( HEIGHT - HEIGHT / 3 ) - 30 ) : ( HEIGHT / 3 ), 30, 30 );
		enemPosX -= velocity;

		//CONTROLAR ENEMIGO
		if( enemPosX < -40 )
		{
			enemPosX = WIDTH;
			ecR = random( 255 );
			ecG = random( 255 );
			ecB = random( 255 );
			enemFloor = random( 1000 ) > 500 ? true : false;
			if( velocity < 25 ) velocity += 2;
			points += 10;
		}
		//COLISIONES
		if( enemPosX > 30 && enemPosX < 65 && enemFloor == floor )
			isAlive = false;

		//SUELO y TECHO
		fill( 0 );
		rect( 0, HEIGHT - HEIGHT / 3, WIDTH, HEIGHT ); //SUELO
		rect( 0, 0, WIDTH, HEIGHT / 3 ); //TECHO

		//MOSTRAR PUNTUACIÓN
		fill( 255 );
		text( points, 5, 5, 20, 200 );
	}

}

function keyPressed()
{
	switch( keyCode )
	{
		case 32:
			//TECLA ESPACIO
			if( isAlive )
				floor = !floor;
			else
				restartGame();
			break;
	}
}

function restartGame()
{
	enemPosX = WIDTH;
	ecR = random( 255 );
	ecG = random( 255 );
	ecB = random( 255 );
	enemFloor = random( 1000 ) > 500 ? true : false;
	points = 0;
	velocity = 4;
	isAlive = true;

}

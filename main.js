
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
 block_Y=1;
 block_X=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_image(get_image)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
	 
		block_image_object.scaleToWidth(150);
		block_image_object.scaleToHeight(140);
		block_image_object.set({
		top:block_Y,
		left:block_X
		});
		canvas.add(block_image_object);
	 
		});
	 
	   
	
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		new_image('rr1.png');
		console.log("e");
		// enviar ranger escarlate
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('rr1.png');
		console.log("v");
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('rr1.png');
		console.log("a");
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('rr1.png');
		console.log("r");
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('rr1.png');
		console.log("i");
	// enviar ranger índigo
	}
	
}


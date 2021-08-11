$(document).ready(function() {

	var canvas = $("#canvas");
	var context = canvas.get(0).getContext("2d");
	
	var image = new Image();
	var imageData;
	var pix;
	
	image.src = "img/tarsila_do_amaral.jpg";
	
	$(image).load(function() {
		
		context.drawImage(image, 0, 0);

	} );
	
	canvas.click(function(e) {
		
		var posX = e.pageX;
		var posY = e.pageY;
		
		// dibujo un círculo alrededor de la posición cliqueada
		context.drawImage(image, 0, 0);
		context.strokeStyle = "#FFF";
		context.beginPath();
		context.arc(posX, posY, 2, 0, Math.PI*2, false);
		context.closePath();
		context.stroke();
		
	} );

} );
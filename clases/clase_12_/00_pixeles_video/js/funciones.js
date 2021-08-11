$(document).ready(function() {

	var video = $("#viola").get(0);
	var canvas = $("#canvas");
	var context = canvas.get(0).getContext("2d");
	var timer = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout;
	
	var imageData;
	var pix;
	
	var posX = -10;
	var posY = -10;
	
	loop();
	canvas.click(tomarColor);
	
	function loop() {
		
		context.drawImage(video, 0, 0);
		
		//transformar();
		
		context.strokeStyle = "#FFF";
		context.beginPath();
		context.arc(posX, posY, 2, 0, Math.PI*2, false);
		context.closePath();
		context.stroke();
		
		timer(loop, 15);
		
	}
	
	function tomarColor(e) {
		
		var canvasOffset = canvas.offset();
		
		posX = e.pageX-canvasOffset.left;
		posY = e.pageY-canvasOffset.top;
		// lo que hace aca es restarle el offset a la posicion X, Y, para poder poner el 0 , 0, en el elemento que queramos.
		
		var imageData = context.getImageData(posX, posY, 1, 1);
		var pixel = imageData.data; // CanvasPixelArray
		var pixelColor = "rgba("+pixel[0]+", "+pixel[1]+", "+pixel[2]+","+pixel[3]+")";
		
		// cambio el color de fondo
		$("body").css("background-color", pixelColor);
		
	};
	
	/*function transformar() {
		
		var imageData = context.getImageData(0, 0, canvas.get(0).width, canvas.get(0).height);
		var pixeles = imageData.data;
		var numPixeles = imageData.width * imageData.height;
		
		var brillo = 50;
		
		for (var i = 0; i < numPixeles; i++) {
			
			var red = pixeles[i*4];
			var green = pixeles[i*4+1];
			var blue = pixeles[i*4+2];
			
			//var ruido = -50 + Math.random() * 100;
			
			pixeles[i*4] = red + brillo; // R
			pixeles[i*4+1] = green + brillo; // G
			pixeles[i*4+2] = blue + brillo; // B
			pixeles[i*4+3] = 255; // Alpha
		}
		
		context.putImageData(imageData, 0, 0);
		
	}*/

} );
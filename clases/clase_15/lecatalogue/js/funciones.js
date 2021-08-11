$(document).ready(function() {

	var canvas = $("#obra");
	var contexto = canvas.get(0).getContext("2d");
	var contenedor = $("#contenedor");

	if(Modernizr.canvas) {
	
		contenedor.append('<p class="info"></p>'); 
		var img = new Image();
		img.src = "img/leparc.jpg";
		$(img).load(mostrarImagen);
	
	}
	
	function mostrarImagen() {
		
		contexto.drawImage(img, 0, 0);
		
		var posX = Math.round(Math.random()*img.width);
		var posY = Math.round(Math.random()*img.height);
		
		var imageData = contexto.getImageData(posX, posY, 1, 1);
		var pixel = imageData.data; 
		var r = pixel[0];
		var g = pixel[1];
		var b = pixel[2];
		var pixelColor = "rgb(" + r + ", " + g + ", " + b + ")";
		
		var horizontal = (Math.round(Math.random()) == 1);
		//alert(horizontal);
		
		contexto.strokeStyle = pixelColor;
		if(horizontal) {
			contexto.moveTo(0, posY);
			contexto.lineTo(canvas.width(), posY);
		}
		else {
			contexto.moveTo(posX, 0);
			contexto.lineTo(posX, canvas.height());
		}
		contexto.stroke();
			
		$(".info").text("Pos X: " + posX + ", " + "Pos Y: " + posY);
		guardarImagen();
	}
	
	function guardarImagen() {
		
		var dataURL = canvas.get(0).toDataURL("image/png");
		//contenedor.append('<img src="' + dataURL + '"></p>'); 
		
	}
	
	/*function guardado(data) {
		
		//alert(JSON.stringify(data))
		$(".info").append("<span>IP: " + data.ip + "</span>");
		
	}*/
	
} );
$(document).ready(function() {

	var canvas = $("#dibujo");
	var context = canvas.get(0).getContext("2d");

	// Cargar imagen
	var image = new Image();
	image.src = "img/warhol.jpg";
	$(image).load(function() {
		
		//Mostrar imagen
		context.drawImage(image, 0, 0); // (imagen, x, y) Muestro la imagen con su tamaño

		// Mostrar imagen reescalada
		/*
		context.shadowBlur = 20;
		context.shadowColor = "rgb(0, 0, 0)";
		context.drawImage(image, 40, 40, canvas.width()/2, canvas.height()/2); // (imagen, x, y, ancho, alto) Muestro la imagen reescalada
		*/
		
		// Recortar imagenes
		/*
		var anchoAlto = canvas.height()/2;
		context.drawImage(image, 253, 118, 247, 239, 480, 40, anchoAlto, anchoAlto); // (imagen, posRecorteX, posRecorteY, anchoRecorte, altoRecorte, x, y, ancho, alto) Tomo un recorte de la imagen y lo muestro. 
		*/
		
		// Otras transformaciones aplicadas sobre la escala
		/*
		context.save();
		context.translate(280, 320);
		context.rotate(0.7854); 
		context.scale(1, -1); // Escala negativa da vuelta la imagen
		context.drawImage(image, 253, 118, 247, 239, -75, -75, 150, 150);
		context.restore();
		*/
	
	} );

} );
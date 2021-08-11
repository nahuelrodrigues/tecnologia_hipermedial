$(document).ready(function() {

	var canvas = $("#dibujo");
	var context = canvas.get(0).getContext("2d");

	// Dibujar un rectangulo
	context.fillRect(40, 40, 100, 100); // (x, y, ancho, alto) Dibuja un rectángulo con relleno
	context.strokeRect(160, 40, 100, 100); // (x, y, ancho, alto) Dibuja el contorno del rectángulo

	// Dibujar líneas
	context.beginPath(); // Comienza el trazo
	context.moveTo(40, 160); // (x, y) Define el punto de origen
	context.lineTo(260, 160); // (x, y) Setea un punto de destino de la línea
	context.closePath(); // Cierra el trazo
	context.stroke(); // Lo muestra sin relleno. Para mostrarlo con relleno se usa cotext.fill();

	// Dibujar círculos
	context.beginPath(); // Comienza el trazo
	context.arc(90, 230, 50, 0, Math.PI*2, false); // (x, y, radio, anguloInicialEnRadianes, anguloFinalEnRadianes, sentidoAntihorario) Dibuja el arco. Si el angulo inicial es 0 y el final PI*2 se forma un círculo.
	context.closePath(); // Cierra el trazo
	context.fill(); // Lo muestra con relleno

	// Grados a Radianes
	var grados = 45; // 45 grados
	var radianes = grados * (Math.PI / 180); // 0.7853 radians

	context.beginPath(); 
	context.arc(210, 230, 50, radianes, Math.PI*2, false); 
	//context.closePath(); // Si el trazo se cierra antes de mostrar el dibujo, se cierra la forma con una línea desde el punto de origen hasta el punto final
	context.stroke(); // Muestra el trazo sin relleno.
	context.closePath();

	// Aplicar estilos de relleno
	context.fillStyle = "rgb(255, 0, 0)"; // Defino el estilo de relleno con el color rojo
	context.fillRect(280, 40, 100, 100); // Dibujo un cuadrado rojo
	context.fillRect(400, 40, 45, 45); // Dibujo otro cuadrado rojo
	context.fillStyle = "rgb(0, 0, 0)"; // Redefino el estilo de relleno con el color negro
	context.fillRect(400, 95, 45, 45); // Dibujo otro cuadrado negro

	// Aplicar estilos de contorno
	context.strokeStyle = "rgb(255, 0, 0)"; // Defino el estilo de contorno con el color rojo
	context.strokeRect(465, 40, 100, 100); // Dibujo un cuadrado rojo
	context.strokeRect(585, 40, 45, 45); // Dibujo otro cuadrado rojo

	context.strokeStyle = "rgb(0, 0, 0)"; // Redefino el estilo de contorno con el color rojo
	context.strokeRect(585, 95, 45, 45); // Black square*/

	// Ancho de línea
	context.lineWidth = 5; // Defino el ancho de la línea
	context.strokeStyle = "rgb(255, 0, 0)";
	context.beginPath();
	context.moveTo(650, 40);
	context.lineTo(680, 140); // Red line
	context.closePath();
	context.stroke();
	
	context.lineWidth = 20; // Defino el ancho de la línea
	context.strokeStyle = "rgb(0, 0, 0)";
	context.beginPath();
	context.moveTo(680, 40);
	context.lineTo(710, 140); // Black line
	context.closePath();
	context.stroke();

	// Curvas
	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(280, 280); // Defino el punto de origen de la curva
	context.quadraticCurveTo(495, 180, 710, 280); // (puntoDeControX, puntoDeControY, x, y) Dibujo una curva
	context.stroke();

	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(40, 350);
	context.bezierCurveTo(223, 250, 446, 450, 710, 350); // (puntoDeContro1X, puntoDeContro1Y, puntoDeContro2X, puntoDeContro2Y, x, y) Dibujo una curva
	context.stroke();

	// Guardar estilos
	context.save(); // Guardo los estilos definidos actualmente (relleno negro)
	context.fillStyle = "rgb(255, 0, 0)"; // Defino el estilo de relleno con el color rojo
	context.fillRect(40, 390, 20, 20); // Dibujo un cuadrado rojo

	context.save(); // Guardo los estilos definidos (relleno rojo)
	context.fillStyle = "rgb(0, 0, 255)"; // Redefino el estilo de relleno con el color azul
	context.fillRect(70, 390, 20, 20); // Dibujo otro cuadrado azul

	context.restore();  // Recupero el estilo anterior (relleno rojo)
	context.fillRect(100, 390, 20, 20); // Dibujo un nuevo cuadrado rojo

	context.restore();  // Recupero nuevamente el estilo anterior (relleno negro)
	context.fillRect(130, 390, 20, 20); // Dibujo un cuadrado negro


	// Uso de texto
	var text = "Ceci n'est pas une pipe.";
	context.font = "30px serif"; // Cambio la tipografía y el tamaño. Puede cambiarse también el estilo (italic, bold, etc.)
	context.lineWidth = 1;
	context.fillText(text, 40, 450); // (texto, x, y) // Dibujo el relleno del texto
	context.strokeText(text, 330, 450); // (texto, x, y) // Dibujo el contorno del texto

	// Dibujos complejos
	context.beginPath();
	context.moveTo(680, 400);
	context.lineTo(650, 450);
	context.lineTo(710, 450);
	context.closePath();
	context.stroke();
	context.fill();



	// Borrar
	/*
	context.clearRect(0, 0, 200, 200); // Borra una porción del canvas
	context.clearRect(0, 0, canvas.width(), canvas.height()); // Borra todo el canvas
	*/

	// Resetear canvas con width y height
	// Se debe redefinir el atributo del elemento canvas. Si se redefine por css el canvas se estira pero no modifica su tamaño ni se borra el contenido.
	/*
	canvas.attr("width", canvas.width()); // Redefiniendo el tamaño del canvas se borra lo dibujado
	canvas.attr("height", canvas.height());
	*/

	// Canvas ocupe la ventana del navegador
	/*
	canvas.attr("width", $(window).width());
	canvas.attr("height", $(window).height());
	context.fillRect(0, 0, canvas.width(), canvas.height());
	*/

	// Evento resize
	/*
	$(window).resize(resizeCanvas);
	function resizeCanvas() {
		canvas.attr("width", $(window).get(0).innerWidth);
		canvas.attr("height", $(window).get(0).innerHeight);
		context.fillRect(0, 0, canvas.width(), canvas.height());
	};
	resizeCanvas();
	*/

} );
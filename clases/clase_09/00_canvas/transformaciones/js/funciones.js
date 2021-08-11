$(document).ready(function() {

	var canvas = $("#dibujo");
	var context = canvas.get(0).getContext("2d");

	// Traslación
	context.save();
	context.fillRect(40, 40, 100, 100); // Dibujo un cuadrado negro
	context.translate(140, 140); // Corro el eje (posicion 0, 0 del canvas) a 140, 140.
	context.fillStyle = "rgb(255, 0, 0)";
	context.fillRect(40, 40, 100, 100); // Dibujo un cuadrado rojo en la misma posición que el negro pero con el eje trasladado.
	context.restore();

	// Escala
	context.fillStyle = "rgb(63, 169, 245)";
	context.save(); // Guardo el estado actual del canvas
	context.scale(2, 2); // Modifico la escala del canvas
	context.fillRect(160, 40, 100, 100); // Dibujo un cuadrado
	context.restore(); // Recupero el estado anterior del canvas
	context.fillRect(160, 40, 100, 100); // Dibujo un cuadrado igual al anterior

	// Rotacion y cambio de eje
	context.save();
	context.fillStyle = "rgb(255, 123, 172)";
	context.translate(90, 225); // Muevo el eje del canvas a la posicion del centro del objeto que quiero rotar
	context.rotate(0.7854); // Giro el canvas 45 grados
	context.fillRect(-50, -50, 100, 100); // Dibujo un rectangulo con el centro en el eje 0, 0 del canvas.
	context.restore();

	// Global Alpha
	context.save();
	context.globalAlpha = 0.5; // Defino la opacidad
	context.fillStyle = "rgb(255, 0, 0)";
	context.fillRect(280, 40, 100, 100);
	context.restore();

	// Sombras	
	context.save();
	context.shadowBlur = 20;
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.shadowColor = "rgba(0, 0, 0, 0.6)";

	context.fillStyle = "rgb(255, 123, 172)";
	context.fillRect(400, 40, 100, 100);
	context.restore();

	// Degradado lineal
	var gradient = context.createLinearGradient(0, 0, 0, canvas.height()); // (puntoOrigenX, puntoOrigenY, puntoDestinoX, puntoDestinoY) creo el degradado
	gradient.addColorStop(0, "rgb(0, 0, 0)"); // (ubicacion, color) Asigno un cambio de color negro al inicio del degradado (ubicacion 0 : 0%)
	gradient.addColorStop(1, "rgb(255, 0, 0)"); // (ubicacion, color) Asigno un cambio de color rojo al final del degradado (ubicacion 1 : 100%)

	context.fillStyle = gradient; // Asigno como estilo de relleno el degradado creado
	context.fillRect(640, 0, 100, canvas.height()); // dibujo el rectangulo

	// Degradado radial
	var canvasCentroX = 90; // dfino el centro del degradado
	var canvasCentroY = 350;

	var gradientRadial = context.createRadialGradient(canvasCentroX, canvasCentroY, 0, canvasCentroX, canvasCentroY, 380); // (circulo1X, circulo1Y, circulo1Radio, circulo2X, circulo2Y, circulo2Radio);
	gradientRadial.addColorStop(0, "rgb(0, 0, 0)"); // (ubicacion, color) Asigno un cambio de color negro al inicio del degradado (ubicacion 0 : 0%)
	gradientRadial.addColorStop(0.3, "rgb(100, 150, 0)"); // (ubicacion, color) Asigno un cambio de color verde en medio del degradado (ubicacion 0.3 : 30%)
	gradientRadial.addColorStop(1, "rgb(255, 0, 0)"); // (ubicacion, color) Asigno un cambio de color rojo al final del degradado (ubicacion 1 : 100%)

	context.fillStyle = gradientRadial;  // Asigno como estilo de relleno el degradado creado
	context.fillRect(40, 300, 480, 100);

} );
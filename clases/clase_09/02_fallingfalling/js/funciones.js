$(document).ready(function() {

	var canvas = $("#dibujo");
	var context = canvas.get(0).getContext("2d");
	var timer = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout;
	
	var fondoR, fondoG, fondoB;

	canvas.get(0).width = $(window).width();
	canvas.get(0).height = $(window).height();
	
	context.fillStyle = "#FFF";
	context.fillRect(0, 0, canvas.width(), canvas.height());

	fondoR = Math.random(Math.random() * 255);
	fondoG = Math.random(Math.random() * 255);
	fondoB = Math.random(Math.random() * 255);
	
	loop();
	
	function loop() {
	
		context.fillStyle = "rgb("+fondoR+","+fondoG+","+fondoB+")";
		context.fillRect(0, 0, canvas.width(), canvas.height());
		
		timer(loop, 40);
		
		// operadores lógicos
		// and: 			&&
		// or: 				||
		// igual: 			== 
		// distinto:		!=
		// mayor que:		>
		// menor que: 		<
		// mayor o igual:	>=
		// menor o igual:	<=
	}
	
} );
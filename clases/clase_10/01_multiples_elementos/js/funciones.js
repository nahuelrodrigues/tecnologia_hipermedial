$(document).ready(function() {

	var canvas = $("#dibujo");
	var context = canvas.get(0).getContext("2d");
	var timer = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout;
	var circulos = new Array(40);
	


	$(window).resize(ajustarTamanio);
	ajustarTamanio();


	for(var i = 0; i < circulos.length; i++) {

			circulos[i] = new Object();
			circulos[i].radio = 10 + Math.random() * 0.1;
			circulos[i].x = Math.random() * canvas.get(0).width;
			circulos[i].y = Math.random() * canvas.get(0).height;
			circulos[i].vx = -5 + Math.random() * 10;
			circulos[i].vy = -15 + Math.random() * 10;	

	}
	
	loop();

	function loop() {
		
		canvas.get(0).width = canvas.get(0).width;
			
		for(var i = 0; i < circulos.length; i++) {


		context.fillStyle = "#FF6600";
		context.beginPath();
		context.arc(circulos[i].x, circulos[i].y, circulos[i].radio, 0, Math.PI*2, false);
		context.closePath();
		context.fill();
		
		circulos[i].x += circulos[i].vx;
		circulos[i].y += circulos[i].vy;
		
		if(circulos[i].x - circulos[i].radio > canvas.width()) {
			circulos[i].x = -circulos[i].radio;
		}
		
		if(circulos[i].x < -circulos[i].radio) {
			circulos[i].x = canvas.width() + circulos[i].radio;
		}
		
		if(circulos[i].y - circulos[i].radio > canvas.height()) {
			circulos[i].y = -circulos[i].radio;
		}
		
		if(circulos[i].y < -circulos[i].radio) {
			circulos[i].y = canvas.height() + circulos[i].radio;
		}

	}
		
		timer(loop, 15);
	}
	
	function ajustarTamanio() {
		canvas.get(0).width = $(window).width();
		canvas.get(0).height = $(window).height();
	}

} );
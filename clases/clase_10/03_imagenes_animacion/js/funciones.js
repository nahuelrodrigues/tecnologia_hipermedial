$(document).ready(function() {

	var canvas = $("#dibujo");
	var context = canvas.get(0).getContext("2d");
	var timer = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout;
	
	var rotacion = 0;
	var image = new Image();
	image.src = "img/warhol.jpg";
	
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, canvas.width(), canvas.height());

	$(image).load(function() {
		loop();
	});
	
	function loop() {
		
		context.fillStyle = "rgba(0, 0, 0, 0.05)";
		context.fillRect(0, 0, canvas.width(), canvas.height());
		
		context.save();
		context.translate(canvas.width()/2, canvas.height()/2);
		context.rotate(rotacion);
		context.drawImage(image, -200, -150, 400, 300);
		context.restore();
		
		rotacion += 0.01;
		
		timer(loop, 15);
	}
	
	

} );
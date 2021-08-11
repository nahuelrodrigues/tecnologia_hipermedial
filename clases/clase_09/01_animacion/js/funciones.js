$(document).ready(function() {

	var canvas = $("#dibujo");
	var context = canvas.get(0).getContext("2d");
	var timer = window.requestAnimationFrame || window.mozRequestAnimationFrame||window.webkitAnmiationFrame||window.msRequestAnimationFrame||setTimeout;




	var x = 100;
	var y = 150;
	var vx= 8;
	var vy= 0;
	var a = 360;
	var r = 50;

	context.fillStyle = "#FFF";
	context.fillRect(0, 0, canvas.width(), canvas.height());

	loop();

	function loop(){

	canvas.get(0).width = canvas.get(0) .width;

	context.fillStyle = "#FFF";
	context.fillRect(0, 0, canvas.width(), canvas.height());

	context.fillStyle = "#F00"
	context.beginPath();



	context.arc(x,y,r,0, Math.PI*(a/180),false);

	context.closePath();
	context.fill();

	x += 5;
	a--;

	if(x >= canvas.width()+ r){
		x = -r;
	}

	timer(loop,15);

	}

	
} );
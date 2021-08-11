$(document).ready(function() {

	var canvas = $("#dibujo");
	var context = canvas.get(0).getContext("2d");
	var timer = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout;
	
	var fondoR, fondoG, fondoB;
	
	canvas.get(0).width = $(window).width();
	canvas.get(0).height = $(window).height();
	
	context.fillStyle = "#FFF";
	context.fillRect(0, 0, canvas.width(), canvas.height());
	
	fondoR = Math.round(Math.random() * 255);
	fondoG = Math.round(Math.random() * 255);
	fondoB = Math.round(Math.random() * 255);
	
	var falling = {
		
		x1:0,
		y1:canvas.height(),
		vx1:0,
		vy1:0,
		
		x2:0,
		y2:canvas.height() / 2,
		vx2:Math.random() * 5,
		vy2:Math.random() * 5,
		
		x3:0,
		y3:0,
		vx3:5 + Math.random() * 10,
		vy3:Math.random() * 10,
		
		x4:canvas.width() / 3,
		y4:0,
		vx4:-2 + Math.random() * 4,
		vy4:Math.random() * 10,
		
		x5:2 * canvas.width() / 3,
		y5:0,
		vx5:-2 + Math.random() * 4,
		vy5:Math.random() * 10,
		
		x6:canvas.width(),
		y6:0,
		vx6:-5 + Math.random() * -10,
		vy6:Math.random() * 10,
		
		x7:canvas.width(),
		y7:canvas.height() / 2,
		vx7:Math.random() * -5,
		vy7:Math.random() * 5,
		
		x8:canvas.width(),
		y8:canvas.height(),
		vx8:0,
		vy8:0,
		
		r:Math.random() * 255,
		g:Math.random() * 255,
		b:Math.random() * 255,
		vr:-5 + Math.random() * 10,
		vg:-5 + Math.random() * 10,
		vb:-5 + Math.random() * 10
	}
	
	loop();
	
	function loop() {
	
		context.fillStyle = 'rgb(' + fondoR + ',' + fondoG + ',' + fondoB + ')';
		context.fillRect(0, 0, canvas.width(), canvas.height());
		
		context.fillStyle = 'rgb(' + Math.round(falling.r) + ',' + Math.round(falling.g) + ',' + Math.round(falling.b) + ')';
		
		context.beginPath();
		context.moveTo(falling.x1, falling.y1);
		context.lineTo(falling.x2, falling.y2);
		context.lineTo(falling.x3, falling.y3);
		context.lineTo(falling.x4, falling.y4);
		context.lineTo(falling.x5, falling.y5);
		context.lineTo(falling.x6, falling.y6);
		context.lineTo(falling.x7, falling.y7);
		context.lineTo(falling.x8, falling.y8);
		context.closePath();
		
		context.fill();
		//context.stroke();
		
		falling.x2 += falling.vx2;
		falling.y2 += falling.vy2;
		falling.vy2++;
		
		falling.x3 += falling.vx3;
		falling.y3 += falling.vy3;
		falling.vy3++;
		
		falling.x4 += falling.vx4;
		falling.y4 += falling.vy4;
		falling.vy4++;
		
		falling.x5 += falling.vx5;
		falling.y5 += falling.vy5;
		falling.vy5++;
		
		falling.x6 += falling.vx6;
		falling.y6 += falling.vy6;
		falling.vy6++;
		
		falling.x7 += falling.vx7;
		falling.y7 += falling.vy7;
		falling.vy7++;
		
		falling.r += falling.vr;
		falling.g += falling.vg;
		falling.b += falling.vb;
		
		// operadores lógicos
		// and: 			&&
		// or: 				||
		// igual: 			== 
		// distinto:		!=
		// mayor que:		>
		// menor que: 		<
		// mayor o igual:	>=
		// menor o igual:	<=
		
		if(falling.y2 > 0 || falling.y3 > 0 || falling.y4 > 0 || falling.y5 > 0 || falling.y6 > 0 || falling.y7 > 0)
		{
			timer(loop, 40);
		}
		
		
		
	}
	
} );
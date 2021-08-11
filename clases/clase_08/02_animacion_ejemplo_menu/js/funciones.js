$(document).ready(function() {

$('#navegacion li a').hover(function() {
		//llevar el tamaño a 200px con animación
		$(this).stop().animate({
			width: '200px'
		}, 300);
	}, function() { //en este función va el mouseleave
		//stop detiene cualquier animación en curso para this -> http://css-tricks.com/examples/jQueryStop/
		$(this).stop().animate({
			width: '170px'
		}, 300);
	});
});

$(document).ready(function() {

$('#navegacion li a').hover(function() {
		//llevar el tama�o a 200px con animaci�n
		$(this).stop().animate({
			width: '200px'
		}, 300);
	}, function() { //en este funci�n va el mouseleave
		//stop detiene cualquier animaci�n en curso para this -> http://css-tricks.com/examples/jQueryStop/
		$(this).stop().animate({
			width: '170px'
		}, 300);
	});
});

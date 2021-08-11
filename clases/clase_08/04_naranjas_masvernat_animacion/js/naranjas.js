$(document).ready(function(){
	
	//agregar el div contenedor y la lista
	$('body').prepend('<div id="contenedor"><ul><li><a href="#cuadrado">cuadrado</a></li></ul></div>');
	
	$('ul li a').mouseenter(function(){							
		$(this).animate({
			width: '1px',
			height: '1px',
			marginTop: '24px' //o mejor $(this).css(top) / 2 - 1px
		}, 1000 , function() {
			$(this).hide();
		});
	});
	
	/////////////////////////////////////////////////////
	//Desactivar href de clicks
	$('ul li a').click(function(){ return false; });
});

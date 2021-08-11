$(document).ready(function(){
	
	//alert(screen.height);
	//alert(screen.width);
	
	//agregar el div contenedor y el ul de la lista
	$('body').prepend('<div id="contenedor"><ul></ul></div>');
	
	//totales alto y ancho de la ventana visible
	var alto = $(window).height(); //cuando alto del body -> document
	var ancho = $(window).width();
	//alert(alto + " x " + ancho);

	//ancho/alto cuadrado y cuantos necesitamos en ambas dimensiones
	var cuadWidth = 50;
	var cuadHeight = 50;
	var cantVert = Math.ceil(alto/cuadWidth);  //redondeamos para arriba
	var cantHoriz = Math.ceil(ancho/cuadHeight); //redondeamos para arriba
	
	//ancho del contenedor (limite horizontal) -> cant cuadrados x ancho 1 cuadrado 
	var totalWidth =  cantHoriz * cuadWidth;
	$('#contenedor').width(totalWidth);
	
	//total de cuadrados necesarios
	var totalCuadrados = cantVert * cantHoriz;
	
	//creamos total, como usan float:left no hay que posicionarlos
	for (var i=0;i<totalCuadrados;i++){
		$('#contenedor ul').append('<li><a href="#cuadrado'+ i +'">cuadrado'+ i +'</a></li>');
	}
	
	var medioHeight = parseInt($('ul li a').css('height')) / 2 - 1;
	//alert(medioHeight);
	
	if (Modernizr.audio) { 
	var source = 'audio/efecto.' + ((new Audio).canPlayType('audio/ogg') ? 'webm' : 'mp3'); // esto me permite utilizar el if dentro de una variable
	}
	
	$('ul li a').mouseenter(function(){			
lanzar(source);
	
		$(this).animate({
			width: '1px',
			height: '1px',
			marginTop: medioHeight
		}, 1000 , function() {
			$(this).hide();
		});
	});
	
	/////////////////////////////////////////////////////
	//sacar el scroll al body | Desactivar href de clicks
	$("body").css("overflow", "hidden");
	$('ul li a').click(function(){ return false; });
	
	
	/* ////////////// SONIDO   ////////////////// */

	function lanzar(source){

		var snd = new Audio(source); // si no tuviesemos problemas de compatibilidades entre navegadores, podríamos poner
										// en vez de source, directamente la ruta del archivo.
								snd.play();
	}
	
	
});


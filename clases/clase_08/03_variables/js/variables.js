$(document).ready(function(){						
	
	$('body').prepend('<div id="contenedor"><ul></ul></div>');

	$('#contenedor ul').append('<li>cuadrado</li>');

	//$('#contenedor li').width(50);
	//$('#contenedor li').height(50);
	
	/* 01 Variables: facilidad de cambio cuando repetimos un valor varias veces */
	//var ancho = 50;	
  //$('#contenedor li').width(ancho);
  //$('#contenedor li').height(ancho);
	
	//02 Variables: adaptabilidad a dist. condiciones -> maquetado, browser, etc.
	/*var anchoViewport = 	$(window).width() / 2;	
	var altoViewport = 	$(window).height();	
	$('#contenedor li').width(anchoViewport);
	$('#contenedor li').height(altoViewport);*/
	
	//03 Variables: optimizar recorrido del DOM
	/*var cuadrado = $('#contenedor li');
  cuadrado.width(50);
  cuadrado.height(50);*/
	//JQuery busca #contenedor li una sola vez, antes dos veces
	
	//04 Variables: valores ingresados por el usuario
	/*$('#crear').click(function() {
		var tamanio = parseInt($('input[name=tamanio]').val());
		$('#contenedor li').width(tamanio);
	  $('#contenedor li').height(tamanio);
		//cancelar comportamiento default del submit
    return false;
	});*/
	
	//05 Variables: valores generados interactivamente con mouse
	/*$('#contenedor li').addClass('absolute').click(function() {
		var arriba = parseInt($('#contenedor li').css('top'));
		var izquierda = parseInt($('#contenedor li').css('left'));	
	  $(this).css('top',arriba + 10);
		$(this).css('left',izquierda + 10);
	});*/

});


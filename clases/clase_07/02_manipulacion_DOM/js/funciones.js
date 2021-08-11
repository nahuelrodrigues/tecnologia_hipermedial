$(document).ready(function() {
	//alert('Primer ejemplo con jQuery');

	/*Selectores*/
	
	//$('h1').css('color','red');
	//$('header h1').css('color','cyan');
	//$('p').css('color','yellow');
	//$('#textoObra p').css('color','magenta');
	//$('.epigrafe').css('color','magenta');
	//$('#textoObra p, h1, h2').css('color','magenta');	
	
	/* Efecto Zebra */
	
	//$('tr').css('color','red');
	
	//alert($('#horCebra tr').length + ' elementos!');
	//alert($('#horCebra tbody tr').length + ' elementos!');
	
	/* Filtros para efecto Cebra*/
	
	//$('#horCebra tbody tr:even').css('color','red');
	//$('#horCebra tbody tr:odd').css('color','red');
	//odd, even, last, first
	
	/*$('#horCebra tbody tr:odd').css('background-color','#1B2B30');
	$('#horCebra tbody tr:odd').css('color','#FFF');*/
	
	//Lo mismo con objetc literals, varias porpiedades de una
	$('#horCebra tbody tr:odd').css(
		{'background-color': '#1B2B30', 'color': '#FFF'}
	);
	
	/* Variables y leer valores CSS (siempre renderizados) */
	var fontSize = $('#textoObra .epigrafe').css('font-size');
	//alert(fontSize);

});

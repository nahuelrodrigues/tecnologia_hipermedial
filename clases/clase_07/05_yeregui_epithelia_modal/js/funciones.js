//http://terreni.com.ar/yeregui/body.html
/* JQuery Manipulacion DOM
	------------------------
	http://api.jquery.com/category/manipulation/
	http://api.jquery.com/wrapAll/
	http://api.jquery.com/before/
	http://api.jquery.com/append/
*/

$(document).ready(function(){

$('.popCrist').prepend('<a href="#close" class="close">close</a>\n<a href="#colapse" class="colapse">colapse</a>');

	$('.close').click(function(e){
		e.preventDefault();
		$(this).parent().hide();
	});

	$('.colapse').click(function(e){
		e.preventDefault();
		if($(this).parent().is('.colapsado')){
			$(this).parent().removeClass('colapsado');
		}else{
			$(this).parent().addClass('colapsado');
		}
	});
	
	$('.popCrist').css('display','none');
	//$('.popCrist').hide();
	
	$(document).click(function(){
		$('.popCrist').css('display','block');
		//$('.popCrist').show();
	});
	
	

	/* -******* OTROS EVENTOS ********- */
	
	//Teclado - http://api.jquery.com/keypress/
	$(document).keypress(function(evento) { //usar keyup/keydown cuando flechas, etc.
		if ( evento.which == 121 ) { //letra y
			 $('.popCrist').css('display','block');
		 }
	});

	//creamos un elemento para el rollover
	$('body').append('<p class="pasame">pasame</p>');
	
	//Cuando mouse entra
	/*$('.pasame').mouseenter(function(){
		$('.popCrist').css('display','block');
	});*/
	
	//ambos estados asociados, 1. entra y 2. sale
	$('.pasame').hover(
		function () {
			$('.popCrist').fadeIn();
		}, 
		function () {
			$('.popCrist').fadeOut('fast'); 
		}
	);

	
});
//http://terreni.com.ar/yeregui/body.html

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
	
	
	$('.popCrist h2').parent().draggable({stack: '.popCrist', handle: 'h2', containment: 'window' });
		
	
});
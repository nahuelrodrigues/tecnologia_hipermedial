$(document).ready(function(){
	
	// Cachear el objeto Window
  $window = $(window); //usamos $ para diferenciar objeto de variable
		
	$('section[data-type="background"]').each(function(){
		 
		var $self = $(this);
		
		$window.scroll(function(){	

		 //console.log($window.scrollTop()); //psoción en px de scroll vertical
		 
		 var yPos = -($window.scrollTop() / $self.data('speed')); //speed 1 es p ej el article	
 
		 // sumar el offset y o valor de top en css	 		 
		 var coords = '50% '+ yPos + 'px';
		 
		 $self.css({ 'background-position': coords });
		
		}); 
	
	});

	
	$('[data-type="sprite"]').each(function() {
		
		var $sprite = $(this);
		
		$window.scroll(function(){		
			var yPos = -($window.scrollTop() / $sprite.data('speed'));
			var coords = '50%' + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
			$sprite.css({ 'background-position': coords });	
		}); 
		
	});

}); // document ready

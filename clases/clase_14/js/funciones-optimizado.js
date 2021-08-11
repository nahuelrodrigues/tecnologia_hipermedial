$(document).ready(function(){
	
	// Cachear el objeto Window
  $window = $(window); //usamos $ para diferenciar objeto de variable
		
	// para todos los background
  $('section[data-type="background"], [data-type="sprite"]').each(function(){
		//cacheamos al background
    var $self = $(this);
		
		//saber si se ve en pantalla ahora o no, para animarlo/no
		offsetCoords = $self.offset();
		topOffset = offsetCoords.top;
	
    
		//evento scroll
		$window.scroll(function(){	

			//no mover fondo si no se ve
			if ( ($window.scrollTop() + $window.height()) > (topOffset) && ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
		
			// yPos será negativo porque sube
			var yPos = -($window.scrollTop() / $self.data('speed')); //speed 1 es p ej el article	
			
			// sumar el offset y o valor de top en css
			if ($self.data('offsetY')) {
				yPos += $self.data('offsetY');
			}
			
			// Parmamos el texto de background-position
			var coords = $self.data('Xposition') + ' ' + yPos + 'px';
			// Movemos el background
			$self.css({ 'background-position': coords });

			};  // if "ver si se ve" 
			
		}); //evento scroll
  
	});	// each data-type


}); // document ready

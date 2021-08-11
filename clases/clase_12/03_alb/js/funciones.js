$(document).ready(function() {


$('a[rel="popup"]').click(function() {

	
	//mejor siempre usar de referencia el centro de la pantalla (screen.height/2, screen.width/2)
	var barra = screen.height -	$(window).height();
	
	var propiedades=new Array();
	propiedades[0] = 60 + barra; //top 
	propiedades[1] = 544; //left 
	propiedades[2] = 500; //width | minimos IE6 100, IE7 250
	propiedades[3] = 500; //height | minimos IE6 100, IE7 150
	propiedades[4] = "toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes";
	//ejecutamos la función
	lanzar(propiedades,url)
	return false;
});

var ventana;

function lanzar(propiedades,url) {			
	ventana = window.open(url, "ventanaZap","top=60,left=544,width=500,height=500,toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes");
	//en IE solo podemos cerrar sin alert desde la win que la que lanzó, 
	//FF y Ch permiten el self.close sin preguntar
}	



	
});
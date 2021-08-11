$(document).ready(function() {
	
	var contenedorUbicacion = $("#ubicacion");
	var mensajes = $("p");
	//var mapa;

	if(Modernizr.geolocation)
	{
		navigator.geolocation.getCurrentPosition(mostrarPosicion, mensajeError);
		//google.maps.event.addDomListener(window, 'load', inicializarGoogleMaps);
	}
	else
	{
		mensajes.html("Su navegador no soporta Geolocalización.");
	}

	function mostrarPosicion(pos) 
	{
		mensajes.html("Latitud: " + pos.coords.latitude + "<br />Longitud: " + pos.coords.longitude + "<br />Precisión: " + pos.coords.accuracy + " metros");
		//var ubicacionUsuario = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
		//mapa.setCenter(ubicacionUsuario);
	}

	function mensajeError()
	{
		mensajes.html("Falló el servicio de Geolocalización.")
	}

	/*function inicializarGoogleMaps() 
	{
		var preferencias = {
			zoom: 17,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};

		mapa = new google.maps.Map(contenedorUbicacion.get(0), preferencias);
		navigator.geolocation.getCurrentPosition(mostrarPosicion, mensajeError);
	}*/

} );



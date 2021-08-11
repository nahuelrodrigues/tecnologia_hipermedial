$(document).ready(function(){
	
	//solo si el nevegador soporta el tag video mostrar los botones
	if (Modernizr.video) {
		//alert(123);
		//$("<p>dsfdsf</p>").insertBefore("#lenLye");
		$("<div><button class=\"reproducir\">reproducir </button><button class=\"pausar\">pausar video</button><button class=\"detener\">detener video</button></div>").insertBefore('#lenLye');
		//alert(123123);
	/*<div><button class="reproducir">reproducir video</button><button class="pausar">pausar video</button>
	<button class="detener">detener video</button></div>*/
	}


	$('.reproducir').click(function() {	
	document.getElementById('lenLye').play();
	
	});
	
	$('.pausar').click(function() {	
			document.getElementById('lenLye').pause();


	});
	
	$('.detener').click(function() {	
			document.getElementById('lenLye').pause();
			document.getElementById('lenLye').currentTime= 0;


	});
	
	
	//Por ejemplo permitiría saltar a capítulos:
	//http://open.bbc.co.uk/rad/demos/html5/rdtv/episode2/index.html
	//Al ser progressive streaming, necesita haber cargado la parte a la 		
	//que queremos saltar. Mientras tanto pondrá señal de loading
	
	$('.reproducirEn').click(function() {
	//En Desarrollo un método de integrarlo a la URL tipo Youtube
	//http://www.w3.org/2008/WebVideo/Fragments/
	//Mientras lo podemos hacer via JQuery

		
	document.getElementById('lenLye').currentTime = 197.2;
	document.getElementById('lenLye').play();
	return false;
	
	});
	
});


	//video.volume (de 0 a 1)
	//video.currentTime
	//video.duration

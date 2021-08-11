$(document).ready(function(){

	//creamos 3 arrays, uno por cada grupo de videos - SOLO NOMBRE
	var testigo=['t_00','t_01','t_02','t_03','t_04','t_05','t_06','t_07','t_08','t_09','t_10','t_11','t_12','t_13','t_14'];
			
	var juana=['j_00','j_01','j_02','j_03','j_04','j_05','j_06','j_07','j_08','j_09','j_10','j_11','j_12','j_13','j_14'];
		
	var maquina=['m_00','m_01','m_02','m_03','m_04','m_05','m_06','m_07','m_08','m_09','m_10','m_11','m_12','m_13','m_14'];	
	
	//tres arrays para los anteriores mezclados, así no perdemos los originales
	var testigoShuffle=[];
	var juanaShuffle=[];
	var maquinaShuffle=[];
}
	//loop while para mezclar arrays - usamos testigo.length pq splice vacia el array
	
	while (testigo.length > 0) {
		testigoShuffle.push(testigo.splice(Math.floor(Math.random() * testigo.length), 1));
		juanaShuffle.push(juana.splice(Math.floor(Math.random() * juana.length, 1));
		maquinaShuffle.push(maquina.splice(Math.floor(Math.random() * maquina.length, 1));

}

console.log(testigoShuffle + "\n----------" + juanaShuffle "\n----------\n" + maquinaShuffle)

	//creamos array que contendrá a todos los videos mezclados
	var mix=[];

while (testigoShuffle.length > 0){

	mix.push(testigoShuffle.splice(0,1));
	mix.push(juanaShuffle.splice(0,1));
	mix.push(maquinaShuffle.splice(0,1));
}

console.log(mix)

	
	//imprimimos nombre en html para llevar cuenta
	$('body').append('<div class="displayArray"></div>');
	$('.displayArray').append('<div class="mix"></div>');


	//REPRODUCCION DE VIDEO
	
	//variable para ir incrementando el índice de cada video en mix (mix[0], mix[1], mix[2], etc.)
	var i = 0;
	
	//invocamos al tag <video> en el HTML
	var pnVideo = documentgetElementById('pn');
	
	//Chequeamos que soporte video HTML5 y despues el formato
if (Modernizr.video) {
	var extension = pnVideo.canPlayType('video/webm') ? 'webm' : 'mp4';
}
	
	//Para la primera reproduccion, cargamos video
	//p ej. -> "video/webm/t_02.webm" ("video/"+"webm"+"/"+""+"mix[12]"+"webm");
	//con i++ primero lee el valor de i (0) y despues suma 1

	
	pnVideo.src = ;
	
	//detectamos el evento de video	ended y llamamos al proximo video
	pnVideo.addEventListener('ended', function(){
   		
			
			
		pnVideo.load();
		pnVideo.play();
}, false);
	
});


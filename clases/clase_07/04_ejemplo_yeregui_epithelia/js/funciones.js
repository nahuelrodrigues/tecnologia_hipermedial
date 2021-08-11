var ventanasBrain = [];
var i = 0;
var firstTimer = 0;
var timer = 0;


$(document).ready(function(){

	$('.areaHearth a').click(function(){
  		$(this).parent().addClass('clickHearth');
	}).mouseleave(function() {
		$(this).parent().removeClass('clickHearth');
	});

	$('.popUp, .popMind, .closeWindows').prepend('<a href="#close" class="close">close</a>\n<a href="#colapse" class="colapse">colapse</a>');

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
	
	//cambiar z-index click ventana
	/*$('.popUp, .popMind').click(function(){
		$(this).css('z-index','200');
	})*/
	
	
	/******************* Aparicion POP-UPs *************************/
	
	//Polemico, sacar scroll
	$('body').css('overflow','hidden');
	
	$('#mind22, #circulos1,	#circulos2,	#texto3, #circulos4, #circulos5, #circulos6, #texto7, #circulos8, #circulos9, #texto10, #circulos11, #texto12, #circulos13, #circulos14, #circulos15, #texto16, #circulos17, #circulos18, #circulos19, #texto20, #circulos21, .closeWindows, #intellectualis22a, #imaginabilis22b').hide();
	
	
	ventanasBrain=['#mind22', '#circulos1',	'#circulos2',	'#texto3', '#circulos4', '#circulos5', '#circulos6', '#texto7', '#circulos8', '#circulos9',	'#texto10', '#circulos11', '#texto12', '#circulos13', '#circulos14', '#circulos15', '#texto16', '#circulos17', '#circulos18', '#circulos19', '#texto20', '#circulos21', '.closeWindows', '#intellectualis22a'];
	
	firstTimer = setInterval('lanzadorBrain()',500);		
	
	$('.titClose, .popUp h2, .popMind h1, .titPop').addClass('noSelect').parent().draggable({stack: '.popUp, .popMind, .closeWindows',handle: 'h1, .popUp h2, .titClose', containment: 'window' });

	posisionPop();
	
	$(window).resize(function() {
  	posisionPop();
	});
	
	
	//suma sin limitador, pero se limita con el draggeable que siempre vuelve al total de draggeables
	$('#mind22, #circulos1,	#circulos2,	#texto3, #circulos4, #circulos5, #circulos6, #texto7, #circulos8, #circulos9, #texto10, #circulos11, #texto12, #circulos13, #circulos14, #circulos15, #texto16, #circulos17, #circulos18, #circulos19, #texto20, #circulos21, .closeWindows, #intellectualis22a, #imaginabilis22b').click(function(){
							
	var index_highest = 0;
	// more effective to have a class for the div you want to search
	$('#mind22, #circulos1,	#circulos2,	#texto3, #circulos4, #circulos5, #circulos6, #texto7, #circulos8, #circulos9, #texto10, #circulos11, #texto12, #circulos13, #circulos14, #circulos15, #texto16, #circulos17, #circulos18, #circulos19, #texto20, #circulos21, .closeWindows, #intellectualis22a, #imaginabilis22b').each(function() {
    // always use a radix when using parseInt
  var index_current = parseInt($(this).css("zIndex"), 10);
  if (index_current > index_highest) {
    index_highest = index_current;		
  }
});

	$(this).css('z-index',index_highest+1);					
		
	});
	
	$('.imagin a').click(function(e){
	e.preventDefault();
	alert('\"The modern dominance of the principle of reason had to go hand in hand with the interpretation of the essence of beings as objects, an object present as representation, ...');
	alert('...an object placed and positioned before a subject. This latter, a man who says \'I\', an ego certain of itself, thus ensures his own technical mastery over the totality of what is\". (Derrida)');
	});
	
	$('.botAnimar ').mouseover(function() {
  	  $('.popImag blockquote').animate({
	    top: '-1450px'
 	    }, 30000, function() {
      });
	}).mouseout(function() {
	  $('.popImag blockquote').clearQueue();
	  $('.popImag blockquote').stop()
      });
	
	
});


function posisionPop() {

	//reordenar ventanas por js
	if($(window).height()>551){
		
	  //alert(Math.floor($(window).height()/$('#circulos1').height()));
		if ($(window).height()>=$('#circulos1').height() * 5){
		  //cuando entran los 5 verticales
			var topActual = $('#circulos1').height() * 4;
			$('#texto10').css({'top':'381px','z-index':'3'});
			$('#circulos11').css({'top':'254px','z-index':'4'});
			$('#texto12').css({'top':'127px','z-index':'5'});
			$('#mind22').css('top',104);
		}else{
			var resto = $(window).height()%$('#circulos1').height();
			var topActual = $('#circulos1').height() * 3 + resto;
			var topTexto10 = $('#circulos1').height() * 2 + resto;
			$('#texto10').css({'top':topTexto10,'z-index':'5'});
			
			if ($(window).height()<=613){
				var valorTop = ($(window).height()-127-21)/2;
			}else{
				var valorTop = ($(window).height()-127)/2;
			}
			$('#circulos11').css('top',valorTop);
		};		
			
		$('#circulos1, #circulos2, #texto3, #circulos4, #circulos5, #circulos6, #texto7, #circulos8, #circulos9').css('top',topActual);
	
	};
	
	};

function lanzadorBrain() {
	
	if( (i+1) != ventanasBrain.length){
	  $(ventanasBrain[i]).show();
	  i++;
	}else{
	 clearInterval(timer);
	}
	
	if(i==1){
		timer = setInterval('lanzadorBrain()',50);
	 clearInterval(firstTimer);
	}
	
};

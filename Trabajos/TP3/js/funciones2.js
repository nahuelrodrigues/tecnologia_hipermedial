$(document).ready(function() {

    $(".kal_cont").each(function(i){ 
        $(this).mousemove(function(e) {
            $(this).find(".ksc").each(function(i){ 
                $(this).css({backgroundPosition: e.pageX+"px "+e.pageY+"px"});
            });
        });
    });



   function runIt(item$) {
        var animWidth = Math.min($(window).width(), $(".fondo").width());
        var numRand = Math.floor(Math.random()*6000) + 70000;
        item$.animate({left: (animWidth + item$.width()) + "px"}, numRand, 'linear', function() {
            item$.css("left", -item$.width());  
              runIt(item$);    
        });
    }

    $('.nube').each(function() {
        runIt($(this));
    });
   });

 $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'audio/francais1.wav');
        
        audioElement.load()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);




        $('.play').click(function() {
        audioElement.play();
        });

  });

  $(document).ready(function() {
        var audio2Element = document.createElement('audio');
        audio2Element.setAttribute('src', 'audio/francais2.wav');
        
        audio2Element.load()
        $.get();
        audio2Element.addEventListener("load", function() {
        audio2Element.play();
        }, true);




        $('.play2').click(function() {
        audio2Element.play();
        });

  });


$(document).ready(function() {
    
    
$('a[rel="popup2"]').click(function() {
    var url = $(this).attr('href');
    
    var barra = screen.height - $(window).height();
    
    var propiedades=new Array();
    propiedades[0] = 60 + barra; 
    propiedades[1] = 420; 
    propiedades[2] = 470; 
    propiedades[3] = 500; 
    propiedades[4] = "toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes";
    lanzar(propiedades,url)
    return false;
});
function lanzar(propiedades,url) {          
    ventana = window.open(url, "ventana","top="+propiedades[0]+",left="+propiedades[1]+",width="+propiedades[2]+",height="+propiedades[3]+", "+propiedades[4]);

}   


    
});

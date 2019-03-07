$(document).ready(function(){
    /*$.getJSON("json/json.json", function(carga) {
        secciones = [];
        for(name in carga)
            secciones.push(name);
    });*/
    


    /*===================SECCIONES=================*/
    $(".menuInicio").click(function(){ 
        $("#secNoticias").fadeIn("slow");
        $("#secContacto").fadeOut("slow");
        $("#secConocenos").fadeOut("slow");
        $("#secAccesibilidad").fadeOut("slow");
        $("#secSede").fadeOut("slow");
        $("#secSede2").fadeOut("slow");
        $("#secPreguntas").fadeOut("slow");
        /*$("body").css({background:"white"});*/
    });
    $(".menuContacto").click(function(){ 
        $("#secNoticias").fadeOut("slow");
        $("#secContacto").fadeIn("slow");
        $("#secConocenos").fadeOut("slow");
        $("#secAccesibilidad").fadeOut("slow");
        $("#secSede").fadeOut("slow");
        $("#secSede2").fadeOut("slow");
        $("#secPreguntas").fadeOut("slow");
        /*$("body").css({background:"white"});*/
    });
    $(".menuConocenos").click(function(){ 
        $("#secNoticias").fadeOut("slow");
        $("#secContacto").fadeOut("slow");
        $("#secConocenos").fadeIn("slow");
        $("#secAccesibilidad").fadeOut("slow");
        $("#secSede").fadeOut("slow");
        $("#secSede2").fadeOut("slow");
        $("#secPreguntas").fadeOut("slow");
        /*$("body").css({background:"white"});*/
    });
    $(".botEsquema").click(function(){ 
        $("#secNoticias").fadeOut("slow");
        $("#secContacto").fadeOut("slow");
        $("#secConocenos").fadeOut("slow");
        $("#secAccesibilidad").fadeIn("slow");
        $("#secSede").fadeOut("slow");
        $("#secSede2").fadeOut("slow");
        $("#secPreguntas").fadeOut("slow");
        /*$("body").css({background:"white"});*/
    });

    $(".menuSede").click(function(){ 
        $("#secNoticias").fadeOut("slow");
        $("#secContacto").fadeOut("slow");
        $("#secConocenos").fadeOut("slow");
        $("#secAccesibilidad").fadeOut("slow");
        $("#secSede").fadeIn("slow");
        $("#secSede2").fadeIn("slow");
        $("#secPreguntas").fadeOut("slow");
        /*$("body").css({background:"white"});*/
    });
    
    $(".aceptar_ini").click(function(){ 
        $("#secNoticias").fadeOut("slow");
        $("#secContacto").fadeOut("slow");
        $("#secConocenos").fadeOut("slow");
        $("#secAccesibilidad").fadeOut("slow");
        $("#secSede").fadeIn("slow");
        $("#secSede2").fadeIn("slow");
        $("#secPreguntas").fadeOut("slow");
        /*$("body").css({background:"white"});*/
    }); 
    
    $(".botFaQ").click(function(){ 
        $("#secNoticias").fadeOut("slow");
        $("#secContacto").fadeOut("slow");
        $("#secConocenos").fadeOut("slow");
        $("#secAccesibilidad").fadeOut("slow");
        $("#secSede").fadeOut("slow");
        $("#secSede2").fadeOut("slow");
        $("#secPreguntas").fadeIn("slow");
        /*$("body").css({background:"white"});*/
    });
    /*=============CONTRASTE===========*/

    var con = 1;

    $(".botContraste").click(function(){ 
        if (con==1){
            
            $("body").css({background:"white"});
            $("h1, h2, h3, h4, p, li, ul, span").css({color: "black"});
            $("h1").css({"border-bottom": "black 3px solid"});
            $("h2").css({"border-bottom": "black 2px solid"});
            $(".h3accordio").css({"background-color": "white"});
            $(".h3accordio").css({"border": "black 1px solid"});
            $(".h3accordio").css({"border-bottom": "black 3px solid"});
            $(".h3accordio:hover").css({"border": "black 1px solid"});
            $(".h3accordio:hover").css({"border-bottom": "black 2px solid"});
            $(".flexTresInterno").css({"background-color": "white"});
            $("footer").css({"border-bottom":".3em black solid"})
            $("#menu1").css({"background-color": "black"});
            $(".inicio").css({"color": "white"});
            $("#menu2").css({"color": "gray"});
            $("#menu2Nav").css({"background-color": "black"});
            $("#menu2Nav:hover").css({"background-color": "white"});
            $("#menu2Nav:hover").css({"color": "black"});
            $(".navM").css({"background-color": "black"});
            $("#menu3Nav").css({"background-color": "black"});
            $(".nav3M").css({"background-color": "black"});
            $(".navM:hover").css({"background-color": "white"});
            $(".navM:hover").css({"color": "black"});
            $("#contenedorOpciones").css({"background-color": "black"});
            $("#botContrasteN").fadeOut();
            $("#botIdiomaN").fadeOut();
            $("#botEsquemaN").fadeOut();
            $("#botFaQN").fadeOut();
            $("#botOFFN").fadeOut();
            $("#imgHamburquesaN").fadeOut();
            $(".boton").css({"background-color": "black"});
            $(".imgRS").css({"opacity": "1"});
            setTimeout (function () {
                $("#botContrasteB").fadeIn();
                $("#botIdiomaB").fadeIn();
                $("#botEsquemaB").fadeIn();
                $("#botFaQB").fadeIn();
                $("#botOFFB").fadeIn();
                $("#imgHamburquesaB").fadeIn();
            }, 500);
            con = 0;
        }
         else{
            $("h1, h2, h3, h4").css({color: "rgb(150, 135, 118)"});
            $("p, li, ul").css({color: "rgb(102, 102, 102)"});
            $("h1").css({"border-bottom": "rgb(150, 135, 118) 3px solid"});
             $("h2").css({"border-bottom": "rgb(150, 135, 118) 2px solid"});
             $(".h3accordio").css({"background-color": "rgb(241, 241, 241)"});
             $(".h3accordio").css({"border": "rgb(150, 135, 118) 1px solid"});
             $(".h3accordio").css({"border-bottom": "rgb(150, 135, 118) 3px solid"});
             $(".h3accordio:hover").css({"border": "rgb(150, 135, 118) 1px solid"});
             $(".h3accordio:hover").css({"border-bottom": "rgb(150, 135, 118) 2px solid"});
             $(".flexTresInterno").css({"background-color": "rgb(241, 241, 241)"});
             $("footer").css({"border-bottom":".3em rgb(106, 89, 68) solid"})
             $("#menu1").css({"background-color": "rgb(150, 135, 118)"});
             $(".inicio").css({"color": "white"});
             $("#menu2").css({"color": "white"});
             $("#menu2Nav").css({"background-color": "rgb(150, 135, 118)"});
             $(".navM").css({"background-color": "rgb(150, 135, 118)"});
             $(".navM:hover").css({"background-color": "rgb(106, 89, 68)"});
             $(".navM:not(hover)").css({"background-color": "rgb(150, 135, 118)"});
             $("#menu3Nav").css({"background-color": "rgb(150, 135, 118)"});
             $(".nav3M").css({"background-color": "rgb(106, 89, 68)"});
             $("#contenedorOpciones").css({"background-color": "rgb(106, 89, 68)"});
             $("#botContrasteB").fadeOut();
             $("#botIdiomaB").fadeOut();
             $("#botEsquemaB").fadeOut();
             $("#botFaQB").fadeOut();
             $("#botOFFB").fadeOut();
             $("#imgHamburquesaB").fadeOut();
             $(".boton").css({"background-color": "rgb(150, 135, 118)"});
             $(".imgRS").css({"opacity": ".5"});
             setTimeout (function () {
                 $("#botContrasteN").fadeIn();
                 $("#botIdiomaN").fadeIn();
                 $("#botEsquemaN").fadeIn();
                 $("#botFaQN").fadeIn();
                 $("#botOFFN").fadeIn();
                 $("#imgHamburquesaN").fadeIn();
             }, 500);
             con = 1;
         }
       
    });

    $(".iniciar").click(function(){
        $("#registro").hide();
        $("#inicio").slideToggle();
    });

    $(".registrar").click(function(){
        $("#inicio").hide();
        $("#registro").slideToggle();
    });

    $(".personal").click(function(){
        $("#personal").slideToggle();
        $("#documentos").fadeOut();
    });

    $(".documentos").click(function(){
        $("#documentos").slideToggle();
        $("#personal").fadeOut();
    });

/*============ACORDEON=============*/

                $(document).ready(function(){
                        $("#prueba1").show();
                        $("#prueba2").hide();
                        $("#prueba3").hide();
                        $("#prueba4").hide();

                    $("#noticia1").click(function(){
                        $("#prueba3").hide(500);
                        $("#prueba2").hide(500);
                        $("#prueba4").hide(500);
                        $("#prueba1").toggle(500);

                    });

                    $("#noticia2").click(function(){
                        $("#prueba1").hide(500);
                        $("#prueba3").hide(500);
                        $("#prueba4").hide(500);
                        $("#prueba2").toggle(500);
                    });

                    $("#noticia3").click(function(){
                        $("#prueba1").hide(500);
                        $("#prueba2").hide(500);
                        $("#prueba4").hide(500);
                        $("#prueba3").toggle(500);
                    });
                     $("#noticia4").click(function(){
                        $("#prueba1").hide(500);
                        $("#prueba2").hide(500);
                        $("#prueba3").hide(500);
                        $("#prueba4").toggle(500);
                    });
                });
               /* </script>*/
 /*======================= MENU DESPLEGABLE  y  PEGAJOSO=======*/

 $("#divImgHamburquesa").click(function(){
    $("#contenedorOpciones").slideToggle();
    });
});

$(document).ready(function(){
	var altura = $('.pegajoso').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.pegajoso').addClass('fixed');
		} else {
			$('.pegajoso').removeClass('fixed');
		}
	});
 
});
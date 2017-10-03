$(document).ready(function() {
  $(".mobile_menu").click(function() {
    $(this).css({
      "display": "none"
    });
            $(".main-header ~ *").slideToggle(300);
    $("header ~ *").slideToggle(300);
     $("body").css({
      "background-color": "#212a33"
    });
    $('header:not(#upp_menu)').css({
      "background-image": "none"
    });   
    $('.mobile-menu-close').css({
      "display": "block"
    });
    
  
$('#logo_color a').html('<img src="logo/KSDNA Logo White.svg" alt="logo">');
  $("#menu_color").css({
      "color": "white"
    });

	/*$(".main-header").css({"height": "100%"});*/
	
	/*$('#main_menu').css({
	"display": "flex",
	"align-items": "center"
    });*/
	var logo_width = parseInt('-'+$('.logo').css('width'))*0.8+'px'; 
	$('#main_menu ul').css({
    "display": "flex",
	"justify-content": "center",
	"flex-direction": "column",
	"margin-left": logo_width,
	"margin-top": '250px'
	/*"margin-left": '-170px'*/
    });
	/*alert(logo_width);*/
	
    /*$("header ~ *").hide(1000);
      $(".main-header ~ *").hide(1000);*/

$('.main-navigation').fadeIn(500);
    $('.main-navigation ul li').css({
      "display": "block",
      "margin": "0 auto"
    });
  });

  $(".mobile-menu-close").click(function() {
    $(this).css({
      "display": "none"
    });
    $('.mobile_menu').css({
      "display": "block"
    });
    $("body").css({
      "background-color": "white"
    });
    $('.main-navigation').fadeOut(200);


$('#logo_color a').html('<img src="logo/KSDNA Logo.svg" alt="logo">');

 $("#menu_color").css({
      "color": "#494b4c"
    });
  $('header:not(#upp_menu)').css({
      "background-image": "url(KSDNA-Immage.jpg)"
    }); 

    $(".main-header ~ *").slideToggle(500);
    $("header ~ *").slideToggle(500);
  });
  
  
  
  
  $(".send_butt").click(function() {

    $('.last_p').text( "Your request have been sent." );
	  
    /*$('form, .send_butt').css({
      "display": "none"
    }); */
	$('form, .send_butt').fadeOut(500, 'swing');

	
  })
  
    $("#doc1").click(function() {
	  
    $('#SDK, #API').fadeOut(500, 'swing');   
	$('#Integration').fadeIn(1000, 'swing');
  })
  
  
      $("#doc2").click(function() {
	  
    $('#SDK, #Integration').fadeOut(500, 'swing');
	$('#API').fadeIn(1000, 'swing');
    
  })
  
    $("#doc3").click(function() {
	  
    $('#API, #Integration').fadeOut(500, 'swing');
	$('#SDK').fadeIn(1000, 'swing');
    
  })
  
  
  
   $(window).scroll(function() {
  /* alert('hello');*/
  /* $('header h1').text('<span class="scrolled">You scrolled!</span>');*/
  });
  
  
 
  
});








/*

$(document).ready(function(){
  $(".mobile_menu").click(function(){

    $('.main-navigation').slideToggle(1000);
  $(".main-header ~ *").slideToggle(1000);
  $("header ~ *").slideToggle(1000);
$('.main-navigation ul li').css({"display":"block",
"margin": "0 auto"

});


  });
});*/

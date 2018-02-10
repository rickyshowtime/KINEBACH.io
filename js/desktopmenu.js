// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#section0').offset().top + $('#section0').height();

// on scroll, 
$(window).on('scroll',function(){ "use strict";

	$('.navbar-toggle').removeClass('navbar-on');
	$('#burgerfooter').removeClass('on');
	$('#burgerlanguage').removeClass('on');
	$('.section').removeClass('on');
	
    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());
		
	
    if (stop > mainbottom ) {
		$(".nav-hide.past-main").animate({
			marginLeft: '100%'
		}, 0);
		$('.nav-hide').addClass('past-main');
		$('#menu').addClass('past-main');
		$('#logo').addClass('scroll');
		$('nav li').addClass('past-main');
		$('nav ul ul').addClass('past-main');
		$('nav li li').addClass('past-main');
        $('nav li a').addClass('past-main');
		$('nav ul ul li').addClass('past-main');
        $('nav li span').addClass('past-main');
		$('li.circle').addClass('past-main');
		$('.nav-hide').addClass('off');
		$('#menuburger').addClass('on');
		$('.active').addClass('past-main');
		$('.circle').addClass('past-main');
		$( ".hide" ).hover(function() {
			  $(".nav-hide").addClass("roll");
			},
			  function() {
			  $(".nav-hide").removeClass("roll");
			  
			});
		$( "nav ul ul" ).hover(function() {
			  $(".nav-hide").addClass("roll");
			},
			  function() {
			  $(".nav-hide").removeClass("roll");
			  
			});
    } else {
		$(".nav-hide.past-main").animate({
			marginLeft: '0'
		}, 0);
		$('.nav-hide').removeClass('off');
		$('#menu').removeClass('past-main');
		$('#logo').removeClass('scroll');
		$('.navbar-toggle').removeClass('navbar-on');
		$('nav ul ul li').removeClass('past-main');
		$('#menuburger').removeClass('on');
		$('.nav-hide').removeClass('past-main');
		$('nav li').removeClass('past-main');
		$('nav ul ul').removeClass('past-main');
		$('nav li li').removeClass('past-main');
        $('nav li a').removeClass('past-main');
        $('nav li span').removeClass('past-main');
		$('li.circle').removeClass('past-main');
		$('.active').removeClass('past-main');
		$('.circle').removeClass('past-main');
    }

});


$('a').click(function(){ "use strict";
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


$(document).ready(function() { "use strict";
    $('.nav-hide').addClass('loaded');
	$('.section').addClass('loaded');
});


// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#section0').offset().top + $('#section0').height();

// on scroll, 
$(window).on('scroll',function(){ "use strict";

    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());

    if (stop > mainbottom +7000) {
			
		window.scrollTo(0, 5500);	

    } 

});

$('#check1').click(function() {"use strict";
   if($(this).is(':checked')) {
       $('html,body').animate({
			scrollTop: $("#footer").offset().top},
			'slow');
   }
   else {
       $('html,body').animate({
			scrollTop: $("#map").offset().top},
			'slow');
   }
});

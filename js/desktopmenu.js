// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#section0').offset().top + $('#section0').height();

// on scroll, 
$(window).on('scroll',function(){ "use strict";

    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());

    if (stop > mainbottom + 200) {
		$('.nav-hide').addClass('past-main');
        $('nav li a').addClass('past-main');
        $('nav li span').addClass('past-main');
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
		$('.nav-hide').removeClass('past-main');
        $('nav li a').removeClass('past-main');
        $('nav li span').removeClass('past-main');
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

    if (stop < mainbottom - 450) {
		$( ".hide" ).hover(function() {
			  $(".nav-hide").removeClass("roll");
			},
			  function() {
			  $(".nav-hide").removeClass("roll");
			  
			});
		$( "nav ul ul" ).hover(function() {
			  $(".nav-hide").removeClass("roll");
			},
			  function() {
			  $(".nav-hide").removeClass("roll");
			  
			});
    } 

});
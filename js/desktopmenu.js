// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#section0').offset().top + $('#section0').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());

    if (stop > mainbottom + 100) {
        $('nav li a').addClass('past-main');
        $('nav li span').addClass('past-main');
		$('.active').addClass('past-main');
		$('.circle').addClass('past-main');
    } else {
        $('nav li a').removeClass('past-main');
        $('nav li span').removeClass('past-main');
		$('.active').removeClass('past-main');
		$('.circle').removeClass('past-main');
    }

});
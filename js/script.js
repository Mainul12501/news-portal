
// Hide or show content
$('.arrow-up').click(function(){
    $("html, body").animate({ scrollTop: 70 }, 1400);
    return false;
});


$(document).scroll(function() {
    var top = $(this).scrollTop();
    if (top > 850) {
        $('.arrow').fadeIn();
    } else {
        $('.arrow').fadeOut();
    }
});

// Scroll
var body = $('html, body');

    $('.arrow').click(function(scroll){
        scroll.preventDefault();
        body.animate({scrollTop:100}, 1200, 'swing');
    });

//  /scroll   

// active class chansge test
// $(function(){
//     $('.test a').filter(function(){return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')
//     $('.test a').click(function(){
//         $(this).parent().addClass('active').siblings().removeClass('active')	
//     })
// })

// adaptive-slider js
$(function() {
    $('.adaptive-slider').adaptiveSlider({
    opacity: 0.7, // This will allow you to set the opacity of the figcaption.
    normalizedTextColors: { // This allows you to configure what color the light text (on a dark background) should have, and vice versa.
    light: '#f1f1f1',
    dark: '#222'
    }
    });
    });




    // owl carousel



    
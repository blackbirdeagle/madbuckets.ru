window.onload = function(){
    $( '#slider1' ).lemmonSlider({
        infinite: true
    });

    $( '#slider2' ).lemmonSlider({
        infinite: true
    });
}

$('.fancybox').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
        media : {},
        overlay: {
            locked: false
        }
    }
});

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

$('[popup-target]').click(function(e) {
    var el = $(this);
    var target = el.attr('popup-target');

    $('.overlay').fadeIn(200, function(){
        $('.popup.'+target).fadeIn(200);
        var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
        var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
        left = left - 19;
        $('.popup.'+target).css('top', top).css('left', left);
    })


    return false;
});

$('.overlay, .close1').click(function(e) {
    var popup = $('.popup:visible');
    popup.fadeOut(200, function(){
        $('.overlay').fadeOut(200);
    });
    return false;
});

function keyExit(e){
    if(e.keyCode == 27){

        var popup = $('.popup:visible');
        popup.fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        });

    }
}

addEventListener("keydown", keyExit);

$('.show_menu').click(function(){
    $('.float__menu').animate({left: 0}, 300);
});

$('.hide__menu').click(function(){
    $('.float__menu').animate({left: -236}, 300);
});
/*
function centerElements(){
    var leftN = $('.owl-carousel').width() / 2 - $('.owl-dots').width() / 2;
    $('.owl-dots').css('left', leftN);
}

centerElements();

$(window).resize(function(){
    centerElements();
});

$('.show_menu').click(function(){
    $('.float__menu').animate({left: 0}, 300);
});

$('.hide__menu').click(function(){
    $('.float__menu').animate({left: -236}, 300);
});





*/
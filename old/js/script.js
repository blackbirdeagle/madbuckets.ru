(function ($) {
    $(document).ready(function () {
        $('.ie7 input[type="text"],.ie7 input[type="email"],' +
            '.ie8 input[type="text"],.ie8 input[type="email"],' +
            '.ie9 input[type="text"],.ie9 input[type="email"]').each(function (i) {
            var value = $(this).attr("placeholder");
            $(this).attr("value", value);
        });

        // Посекционный скролл
        $('#fullPage').fullpage({
            verticalCentered: false,
            responsiveHeight: 520,
            responsiveWidth: 740,
            //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
            css3:false,
            anchors: ["bgVideo","bgSlider"]
        });
        
        // Задание ширины слайдов 
        function sliderResize(){
            var wWindow = $(window).outerWidth(),
                hWindow = $(window).outerHeight(),
                wSlider = $(".W_slider").outerWidth(),
                hSlider = $(".W_slider").outerHeight();
            $('.W_slider .B').outerWidth(wWindow);
            if (wSlider/hSlider > 1.5) {
                $('.W_slider .B img')
                    .css({
                        "margin-top":"-"+ ( ((wSlider*1000)/1500)/2 ) + "px"})
                    .addClass("-wideImg")
                    .removeClass("-narrowImg");
            }else{
                $('.W_slider .B img')
                    .css({
                        "margin-left":"-"+ ( (hSlider*1.5)/2 ) + "px"})
                    .removeClass("-wideImg")
                    .addClass("-narrowImg");
            };
        };
        sliderResize();
        $(window).resize(function () {
            sliderResize();
        });
        
        // Слайдер на второй странице
        $('.W_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false
        });
        $('input.phone').mask("9 999 999-99-99");
        $(".FORM_validate").each(function(){$(this).validate()});
        $(".fancybox").fancybox();
    });
})(jQuery);

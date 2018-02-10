jQuery(document).ready(function($) {
      $(window).scroll(function(){
        if($(window).scrollTop() > 800){
            $("#footer-scroll").fadeIn(800);
        } else{
            $("#footer-scroll").fadeOut(800);
        }
    });
    
    $('#footer-scroll').click(function() {
        $("html, body").animate({
            scrollTop:0
        }, {
            duration: 1400,
            easing: "easeInOutExpo"
        });
    });


/// hover title of gallery items to trigger animation on gallery images
    $('.case__title').mouseenter(function() {
        $(this).prev().find('.case__image').css('transform', 'scale(1.07)');
    });
    $('.case__title').mouseleave(function() {
        $(this).prev().find('.case__image').css('transform', 'scale(1)');
    });

    window.sr = ScrollReveal();
    sr.reveal('.reveal', {
        // 'bottom', 'left', 'top', 'right'
        origin: 'bottom',

        // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
        distance: '10px',

        // Time in milliseconds.
        duration: 2000,
        delay: 0,

        // Starting opacity value, before transitioning to the computed opacity.
        opacity: 0,

        // Starting scale value, will transition from this value to 1
        scale: 1,

        // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        easing: 'ease',

        // `<html>` is the default reveal container. You can pass either:
        // DOM Node, e.g. document.querySelector('.fooContainer')
        // Selector, e.g. '.fooContainer'
        container: window.document.documentElement,

        // true/false to control reveal animations on mobile.
        mobile: true,

        // true:  reveals occur every time elements become visible
        // false: reveals occur once as elements become visible
        reset: false,

        // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        useDelay: 'always',

        // Change when an element is considered in the viewport. The default value
        // of 0.20 means 20% of an element must be visible for its reveal to occur.
        viewFactor: 0,
    });
    sr.reveal('.reveal-delay', {
        // 'bottom', 'left', 'top', 'right'
        origin: 'bottom',

        // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
        distance: '10px',

        // Time in milliseconds.
        duration: 2000,
        delay: 300,

        // Starting opacity value, before transitioning to the computed opacity.
        opacity: 0,

        // Starting scale value, will transition from this value to 1
        scale: 1,

        // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        easing: 'ease',

        // `<html>` is the default reveal container. You can pass either:
        // DOM Node, e.g. document.querySelector('.fooContainer')
        // Selector, e.g. '.fooContainer'
        container: window.document.documentElement,

        // true/false to control reveal animations on mobile.
        mobile: true,

        // true:  reveals occur every time elements become visible
        // false: reveals occur once as elements become visible
        reset: false,

        // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        useDelay: 'always',

        // Change when an element is considered in the viewport. The default value
        // of 0.20 means 20% of an element must be visible for its reveal to occur.
        viewFactor: 0,
    });
    sr.reveal('.fade', {
        // 'bottom', 'left', 'top', 'right'
        origin: 'top',

        // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
        distance: '0',

        // Time in milliseconds.
        duration: 2000,
        delay: 0,

        // Starting opacity value, before transitioning to the computed opacity.
        opacity: 0,

        // Starting scale value, will transition from this value to 1
        scale: 1,

        // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        easing: 'ease',

        // `<html>` is the default reveal container. You can pass either:
        // DOM Node, e.g. document.querySelector('.fooContainer')
        // Selector, e.g. '.fooContainer'
        container: window.document.documentElement,

        // true/false to control reveal animations on mobile.
        mobile: true,

        // true:  reveals occur every time elements become visible
        // false: reveals occur once as elements become visible
        reset: false,

        // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        useDelay: 'always',

        // Change when an element is considered in the viewport. The default value
        // of 0.20 means 20% of an element must be visible for its reveal to occur.
        viewFactor: 0,
    });
    sr.reveal('.fade-delay', {
        // 'bottom', 'left', 'top', 'right'
        origin: 'top',

        // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
        distance: '0',

        // Time in milliseconds.
        duration: 2000,
        delay: 500,

        // Starting opacity value, before transitioning to the computed opacity.
        opacity: 0,

        // Starting scale value, will transition from this value to 1
        scale: 1,

        // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        easing: 'ease',

        // `<html>` is the default reveal container. You can pass either:
        // DOM Node, e.g. document.querySelector('.fooContainer')
        // Selector, e.g. '.fooContainer'
        container: window.document.documentElement,

        // true/false to control reveal animations on mobile.
        mobile: true,

        // true:  reveals occur every time elements become visible
        // false: reveals occur once as elements become visible
        reset: false,

        // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        useDelay: 'always',

        // Change when an element is considered in the viewport. The default value
        // of 0.20 means 20% of an element must be visible for its reveal to occur.
        viewFactor: 0,
    });
}); 
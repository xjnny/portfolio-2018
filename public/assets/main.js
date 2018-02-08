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
});


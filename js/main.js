/* $ */
$(document).ready(function () {
    'use strict';
    
    //FOR NICE SCROLL
        //$('html').niceScroll(); //***********solve this error********
    /*====== NAV ========*/
    
    //FOR RESPONSIVE NAVBAR
        $('.fa-bars').click(function () {
            $('.nav-links').slideToggle();
        });
    
    //FOR STYLE NAVBAR
            $(window).on("scroll",function(){
                if ($(window).scrollTop() >= 30){
                    
                    $('.nav').css({
                        "height":"60px",
                        "padding":"14px 0",
                        
                    });
                
                }else if ($(window).scrollTop() <= 1){
                    $('.nav').css({
                        "height":"80px",
                        "padding":"23px 0",
                    });
                    
                }
            });
    /*==================================================================*/
    /*====== TESTIMONIAL ========*/
    
    //FOR TESTIMONIAL 
    $('.testi .container .slider').slick({
            dots: true,
            prevArrow:$('.prev'),
            nextArrow:$('.next'),
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:2000,
            //fade: true,

    });


    
    
    
   
});

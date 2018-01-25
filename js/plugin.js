/*global $*/
$(function () {
    "use strict";
//    $('section.about .about-middle .about-middle-img', 'section.about .about-right .about-right-img').hover(function () {
//        $('section.about .about-middle .about-middle-img img', 'section.about .about-right .about-right-img img').style.transform.scale = 1.2;
//    });
    $('.first').click(function () {
        $('.magazine .one').show().siblings().hide();
    });
    $('.second').click(function () {
        $('.magazine .two').show().siblings().hide();
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 600) {
            $('.head-scroll').slideDown(500);
        } else {
            $('.head-scroll').slideUp(500);
        }
    });
    
    $('.one').css('display',  'block');
    $('.solutions-right h3').click(function () {
        $(this).next().toggle(500);
        $('.solutions-right p').not($(this).next()).slideUp(500);
    });
    $('.study').scrollTop(function () {
        
    });
    //trigger MixItUp Plugin
    $('.all-images').mixItUp();
    // nice scrolling 
    $("body").niceScroll({
        cursorwidth: "5px", 
        cursorborder: "1px solid transparent", 
        cursorborderradius: "5px",
    });
    
    //Start counter
    $('.counter').click( function () {
        $('.timer').countTo();
    });
});
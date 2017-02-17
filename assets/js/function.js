// $('body').before('<div class="bodyLoading"><i></i></div>');

$(window).load(function () {

    $("body").addClass('fadeInLoading');
    $(".bodyLoading").fadeOut(500);
	

});



var w = $(window).width();

/**************scrolltoTop**************/
$(window).scroll(function () {
    var s = $(this).scrollTop();
    var m = 300;
    if(s > m) {
        $("#pagetop").fadeIn('slow');
    } else if(s < m) {
        $("#pagetop").fadeOut('slow');
    };
    
});





$("#pagetop p").click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
});
/**************scrolltoTop end**************/


//Reload

$(document).ready(function(){

    var Dwinsize, Nwinsize;

    if ( window.innerWidth>768) {
      Dwinsize = true;
    }else{
      Dwinsize = false;
    }

    $( window ).resize(function(){
      if ( window.innerWidth>768) {
        Nwinsize = true;
      }else{
        Nwinsize = false;
      }

      if (Dwinsize != Nwinsize) {
        $( window ).off('resize');
        window.location.reload()
      };
    })

    /**************locationInfo**************/
    
    /*main nav*/
    $('#navBtn').click(function(){
        $(this).toggleClass('open');
        $('.mainNav ul').slideToggle(1000);
    });

    /**************back to top**************/
    $(".back-top").hide();    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });



});






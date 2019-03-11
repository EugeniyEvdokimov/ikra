

// initialization slider when width less 960px

function screenClass() {
    if($(window).innerWidth() > 960) {
        $('.plagiarizm-carousel').removeClass('owl-carousel');
    } else {
        $('.plagiarizm-carousel').addClass('owl-carousel');
            var owl2 = $('.plagiarizm-carousel');
            owl2.owlCarousel({
                items:1,
                loop:true,
                margin: 0,
                smartSpeed: 500,
                dots: false,
                //autoplay: true,
                //autoHeight:true,
                nav: true,
                // autoplayTimeout: 20000,
                // autoplayHoverPause: false
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    960: {
                        items: 1
                    }
                }
            });
    }
}


screenClass();



$(window).bind('resize',function(){
    screenClass();
});



$(document).ready(function() {

    // init owl carousel
    $(document).ready(function() {
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 1,
            itemsMobile: false,
            pagination: false,
            dots: true,
            loop: true,
            autoplay: true,
            autoplaySpeed: 1000
        });
    });

      // init mobile menu
      $('.navbar-toggler').on('click', function () {
          $('.header-nav').toggleClass('collapse');
      })

    // init modal
    var openModalsBtns = $('[data-modal]');

    openModalsBtns.on('click', function() {

        var target = $(this).attr('data-target');
        $('#' + target).bPopup({
            closeClass: 'close-modal',
            positionStyle: 'fixed',
            speed: 450,
            transition: 'slideDown'
        });
              

    });



});



$(function() {


    
    

});

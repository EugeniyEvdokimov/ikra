

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

    // init writers carousel
    $(document).ready(function() {
        var owl = $(".writers-carousel");
        owl.owlCarousel({
            items: 4,
            itemsDesktop: [1280, 4],
            itemsDesktopSmall: [960, 2],
            itemsTablet: [600, 1],
            itemsMobile: false,
            pagination: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1080: {
                    items: 3
                },
                1280: {
                    items: 4
                }
            }
        });
    });

      // init reviews carousel
    $(document).ready(function() {
        var owl = $(".reviews-carousel");
        owl.owlCarousel({
            items: 2,
            itemsDesktop: [1280, 2],
            itemsDesktopSmall: [960, 1],
            itemsTablet: [600, 1],
            itemsMobile: false,
            pagination: false,
            dots: false,
            stagePadding: 100,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0
                },
                600: {
                    items: 1,
                    stagePadding: 0
                },
                960: {
                    items: 1,
                    stagePadding: 100
                },
                1080: {
                    items: 2
                },
                1280: {
                    items: 2
                }
            }
        });
    });

    // 
    $(".nav-link").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 777);
        e.preventDefault();
        return false;
    });

});



$(function() {


    
    

});

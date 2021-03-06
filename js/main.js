$(document).ready(function() {
    $("#container").mixItUp({});
    $('.popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".sidebar").toggleClass("active")
    });
    $("body").niceScroll();
    var owl = $("#owl-about");
    owl.owlCarousel({
        navigation: false,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        transitionStyle: "fade"
    });
    var owl = $(".carousel");
    owl.owlCarousel({
        navigation: false,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        transitionStyle: "backSlide"
    });
    var $header_menu = $("#header_menu");
    $(window).scroll(function() {
        if ($(this).scrollTop() > 615 && $header_menu.hasClass("default")) {
            $header_menu.fadeOut('fast', function() {
                $(this).removeClass("default").addClass("fixed transbg").fadeIn('fast')
            })
        } else if ($(this).scrollTop() <= 635 && $header_menu.hasClass("fixed")) {
            $header_menu.fadeOut('fast', function() {
                $(this).removeClass("fixed transbg").addClass("default").fadeIn('fast')
            })
        }
    });
    $header_menu.hover(function() {
        if ($(this).hasClass('fixed')) {
            $(this).removeClass('transbg')
        }
    }, function() {
        if ($(this).hasClass('fixed')) {
            $(this).addClass('transbg')
        }
    })
});
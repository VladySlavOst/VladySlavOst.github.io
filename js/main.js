$(document).ready(function(){

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
  

  $(".btn_mnu").click(function(){
    $(this).toggleClass("active");
    $(".sidebar").toggleClass("active");
  });

  $("body").niceScroll();


  var owl = $("#owl-about");

  $("#owl-about").owlCarousel({
   items: 1,
   autoPlay : true,
   slideSpeed : 200,
   stopOnHover : true,
   navigation : false,
   pagination : false,
   paginationSpeed : 500,
   singleItem : true,
   afterInit : progressBar,
   afterMove : moved,
   startDragging : pauseOnDragging,
   transitionStyle : "fade"



 });

var time = 9; // time in seconds

var $progressBar,
$bar, 
$elem, 
isPause, 
tick,
percentTime;

$(".carousel").owlCarousel({
 items: 1,
 autoPlay : true,
 slideSpeed : 10000,
 rewindSpeed : 1000,
 stopOnHover : false,
 navigation : false,
 pagination : false,
 paginationSpeed : 500,
 singleItem : true,
 afterInit : progressBar,
 afterMove : moved,
 startDragging : pauseOnDragging,
 transitionStyle : "backSlide"

});

//Init progressBar where elem is $("#owl-demo")
function progressBar(elem){
  $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }

    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }

    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };

    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
         width: percentTime+"%"
       });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }

    //pause while dragging 
    function pauseOnDragging(){
      isPause = true;
    }

    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }



    $("#container").mixItUp({

    });


// Меню начало
    var $header_menu = $("#header_menu");

    $(window).scroll(function(){

      if ( $(this).scrollTop() > 615 && $header_menu.hasClass("default") ){

        $header_menu.fadeOut('fast',function(){

          $(this).removeClass("default")

          .addClass("fixed transbg")

          .fadeIn('fast');

        });

      } else if($(this).scrollTop() <= 635 && $header_menu.hasClass("fixed")) {

        $header_menu.fadeOut('fast',function(){

          $(this).removeClass("fixed transbg")

          .addClass("default")

          .fadeIn('fast');

        });

      }
   });//scroll



    $header_menu.hover(
      function(){
       if( $(this).hasClass('fixed') ){

        $(this).removeClass('transbg');
      }
    },

    function(){

     if( $(this).hasClass('fixed') ){

      $(this).addClass('transbg');
    }

            });//hover

    // меню конец


    });//jQuery

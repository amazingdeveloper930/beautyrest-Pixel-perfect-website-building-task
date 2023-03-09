$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".headerCol").addClass("fixedHeader");
    } else {
      $(".headerCol").removeClass("fixedHeader");
    }
  });

  for(var i = 0; i <= $("#immediatePressureRelief .inline_text h5").length; i++){
    $(".char" + i).fadeIn(500*(i + 1));
  }

});
$('.toglTrigger').click(function(){
  $('html').toggleClass('openNav');
  $(".hSidebarCol .col-lg-auto").hide();
});
$('.menuCol, .navBackDrop').click(function(){
  $('html').removeClass('openNav');
})




$("[data-scroll-to]").click(function() {
  var $this = $(this),
      $toElement      = $this.attr('data-scroll-to'),
      $offset         = $this.attr('data-scroll-offset') * 1 || 0,
      $speed          = $this.attr('data-scroll-speed') * 1 || 500;
  $('html, body').animate({
    scrollTop: $($toElement).offset().top + $offset
  }, $speed);
});

AOS.init({
  once: true
});

var swiper = new Swiper(".hzImgSlider", {
  effect: "creative",
  direction: "vertical",
  /*mousewheel: false,*/
  /*mousedrag:false,*/
  autoplay: true,
  /*mousewheel: {
    mousewheelControl: false,
    releaseOnEdges: true
  },*/
  speed: 2000,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, "0%", -1],
    },
    next: {
      translate: [0, "100%", 0],
    },
  },
});
var bTSwiper = new Swiper(".bTitleSwiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 200,
  loop: 'true',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



var imageSwiper = new Swiper('.bImgSlider', {
  speed: 2500,
  loop: 'true',
  // longSwipesRatio: 0.01,
  // followFinger: false,
  // grabCursor: true,
  watchSlidesProgress: true,
  // parallax: true,
  effect: "fade",
  parallax: true,
  lazy: {
    loadPrevNext: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

/*setTimeout(function() {
  console.log("every  3 seconds");
}, 3000);*/

/*var imageSwiper2 = new Swiper('.bImgSlider2', {
  speed: 2500,
  loop: 'true',
  // longSwipesRatio: 0.01,
  // followFinger: false,
  // grabCursor: true,
  watchSlidesProgress: true,
  // parallax: true,
  effect: "fade",
  parallax: true,
  lazy: {
    loadPrevNext: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});*/

/*setTimeout(waitToStart, 3000);
var index = 0;
function waitToStart(){  
  setInterval(function () {
    console.log("every 5 seconds");
    if(index % 2 == 0){
      $(".second_animated").hide();
      $(".first_animated").fadeIn(0);
    }
    else
    {
      $(".second_animated").fadeIn(0);
      $(".first_animated").hide();
    }
    index++;
  }, 5500);
}
*/
$('.bannerMenuOptions').on('click', 'ul li a', function() {
   var target = $(this).data("scroll-to");
   document.querySelector(target).scrollIntoView({behavior: 'smooth'});
   return false;
});

$(".bannerSection").on("click", function(event){
  var x = event.clientX;
  var y = event.clientY;
  var window_width = window.innerWidth;
  if(x < (window_width / 2 ) )
    window.open("https://www.beautyrest.com/mattresses/black/", "_blank");
    //window.location.href = "https://www.beautyrest.com/mattresses/black/";
    //document.querySelector('#feelLifted').scrollIntoView({behavior: 'smooth'});
  else
    window.open("https://www.beautyrest.com/mattresses/black-hybrid/", "_blank");
    //window.location.href = "https://www.beautyrest.com/mattresses/black-hybrid/";     
    //document.querySelector('#feelEmbraced').scrollIntoView({behavior: 'smooth'});

});
var index = 0;
setTimeout(waitToStart2, 10500);
function waitToStart2(){
  $(".first_animated").fadeOut("fast");

  setInterval(function () {
    if(index % 2 == 0){
      $(".second_animated").hide();
      $(".first_animated").show();
    }
    else
    {
      $(".second_animated").show();
      $(".first_animated").hide();
    }
    index++;
  }, 5500);
}
// imageSwiper.controller.control = this.bTSwiper;
// bTSwiper.controller.control = this.imageSwiper;

$(document).ready(function() {
    var project1 = $('.bannerImgCol').offset();
    var $window = $(window);
    $window.scroll(function() {
        if ( $window.scrollTop() >= project1.top) {
            $(".headerCol").addClass("showHNav");
        }
        else {
          $(".headerCol").removeClass("showHNav");
        }
    });
});

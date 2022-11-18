$(document).ready(function ($) {

  // sticky header area

  // $(".stick-area").sticky({topSpacing:0});

  // sticky header area

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 550) {
      $(".stick-area").addClass("is-stick");
    } else {
      $(".stick-area").removeClass("is-stick");
    };
  });

  // sticky footer area

  var footerHeight = $(".site-footer").height();
  $(".site-main-wrapper").css('margin-bottom', footerHeight + 'px');

  // counter area

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });

});
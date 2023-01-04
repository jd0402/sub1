AOS.init({
    duration: 1200
  })

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.top-link').fadeIn();
    } else {
        $('.top-link').fadeOut();
    }
});
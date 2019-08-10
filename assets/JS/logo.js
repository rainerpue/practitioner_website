$(window).scroll(function(){
    $(".navbar-brand").css("opacity", 1 - $(window).scrollTop() / 50);
  });
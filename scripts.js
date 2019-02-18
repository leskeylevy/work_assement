
$(window).scroll(function() {
  if ($(document).scrollTop() > 500) {
    $('.navbar').removeClass('bg-transparent');
  } else {
    $('.navbar').addClass('bg-transparent');
  }
});
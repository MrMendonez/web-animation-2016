// Scripts for Pyramid of Pictures

$('.pulse-on-mouseenter').on('mouseenter', function() {
  $(this).toggleClass("animated pulse");
}).on("mouseleave", function() {
  $(this).toggleClass("animated pulse");
});

$('.animate-btn').on('click', function() {
  $(this).prev().toggleClass("animated pulse");
});
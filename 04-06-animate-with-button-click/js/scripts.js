// Scripts for rows.html

$('.animate-on-mouseenter').on('mouseenter', function() {
	$(this).toggleClass("animated fadeIn");
}).on('mouseleave', function() {
  $(this).toggleClass("animated fadeIn");
});

$('.animate-on-click').on('click', function() {
  $(this).prev().addClass("animated bounce");
  setTimeout(function() {
    $('#black-and-white-img').removeClass("animated bounce")
  }, 1000); // end setTimeout function
})
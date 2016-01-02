$('.dropdown-toggle').click(function() {
  var location = $(this).attr('href');
  window.location.href = location;
  return false;
});

$(document).ready(function() {
  $('.navbar-default .navbar-nav > li.dropdown').hover(function() {
    $('ul.dropdown-menu', this).stop(true, true).slideDown('fast');
    $(this).addClass('open');
  }, function() {
    $('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
    $(this).removeClass('open');
  });
});

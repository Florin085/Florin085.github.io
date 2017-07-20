$(function() {

  $('.visit-website-link').click(function() {
    $('.leave-site-overlay').css('display', 'inline');
    return false;
  });

  $('.cta-see-website').click(function() {
    $('.leave-site-overlay').css('display', 'inline');
    return false;
  });

  $('.close-sign').click(function() {
    $('.leave-site-overlay').css('display', 'none');
  });


});

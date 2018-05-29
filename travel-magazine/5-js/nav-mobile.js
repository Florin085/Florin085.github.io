$(function() {

  $('.closed-menu').click(function() {
    $('.mobile-menu').css('display', 'inline');
    return false;
  });

  $('.closed-menu').click(function() {
    $('.closed-menu').css('display', 'none');
    return false;
  });

  $('.closed-menu').click(function() {
    $('.opened-menu').css('display', 'inline-block');
    return false;
  });

  $('.opened-menu').click(function() {
    $('.mobile-menu').css('display', 'none');
    return false;
  });

  $('.opened-menu').click(function() {
    $('.closed-menu').css('display', 'inline-block');
    return false;
  });

  $('.opened-menu').click(function() {
    $('.opened-menu').css('display', 'none');
    return false;
  });

});

$(function() {

  $('.menu-button').click(function() {
    $('.menu-overlay').css('display', 'inline');
    return false;
  });

  $('.close-btn').click(function() {
    $('.menu-overlay').css('display', 'none');
  });


});

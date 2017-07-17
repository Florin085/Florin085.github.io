(function ($)  {
  var $mobileNavToggleBtn = $('.mobile-nav-toggle');

  function onBtnClick (e) {
      var $selectors = $('.mobile-nav-toggle, .mobile-nav');
      $selectors.toggleClass('is-open');
  }

  $(document).ready(function() {
    $mobileNavToggleBtn.on('click', onBtnClick)
  });

})(jQuery);

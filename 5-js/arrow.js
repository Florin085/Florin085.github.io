$(function() {
    var header = $("#arrow");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('fixed-arrow').addClass("absolute-arrow");
        } else {
            header.removeClass("absolute-arrow").addClass('fixed-arrow');
        }
    });
});

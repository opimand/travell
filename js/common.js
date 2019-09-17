$(function() {

    $("a[href=\"#about\"]").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });

    $("a[href=\"#tour\"]").click(function() {
        $('html, body').animate({
            scrollTop: $("#tour").offset().top
        }, 2000);
    });

    $("a[href=\"#form\"]").click(function() {
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 2000);
    });

});

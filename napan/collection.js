// Function to render your it
    $(document).ready(function () {
        $(window).bind('scroll', function () {
            let navHeight = $(window).height() - 70;
            if ($(window).scrollTop() > navHeight) {
                $('nav').addClass('scrollFix');
            } else {
                $('nav').removeClass('scrollFix');
            }
        });
    });
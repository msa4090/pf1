$(window).scroll(function quickLink() {
    var scl = $('html').scrollTop();
    var height = $('html').height();
    var height_win = $(window).height();

    if (scl < 750 && $('.quick-link').hasClass('active')) {
        $('.quick-link').removeClass('active');
    }
    if (scl >= 750 && !$('.quick-link').hasClass('active')) {
        $('.quick-link').addClass('active');
    }

    if (scl < 900 && $('.quick-link').hasClass('active')) {
        $('.quick-link > ul > li > .business').removeClass('active');
    }
    if (scl < 1400 && scl >= 900 && !$('.quick-link > ul > li > .business').hasClass('active')) {
        $('.quick-link > ul > li > .business').addClass('active');
        $('.quick-link > ul > li > .rentacar').removeClass('active');
    }

    if (scl < 1900 && scl >= 1400 && !$('.quick-link > ul > li > .rentacar').hasClass('active')) {
        $('.quick-link > ul > li > .rentacar').addClass('active');
        $('.quick-link > ul > li > .business').removeClass('active');
        $('.quick-link > ul > li > .mice').removeClass('active');
    }

    if (scl < 2300 && scl >= 1900 && !$('.quick-link > ul > li > .mice').hasClass('active')) {
        $('.quick-link > ul > li > .mice').addClass('active');
        $('.quick-link > ul > li > .rentacar').removeClass('active');
        $('.quick-link > ul > li > .tour').removeClass('active');
    }

    if ((scl >= 2300 || Math.round(scl == height - height_win)) && !$('.quick-link > ul > li > .tour').hasClass('active')) {
        $('.quick-link > ul > li > .tour').addClass('active');
        $('.quick-link > ul > li > .mice').removeClass('active');
    }
});

$(window).scroll(function scrollTop() {
    var scl = $('html').scrollTop();

    if (scl >= 350 && !$('.scroll-top').hasClass('active')) {
        $('.scroll-top').addClass('active');
        $('.scroll-top').animate({
            opacity: 1
        }, 300);
    } else if (scl < 350 && $('.scroll-top').hasClass('active')) {
        $('.scroll-top').removeClass('active');
        $('.scroll-top').animate({
            opacity: 0
        }, 300);
    }
});

function go_top() {
    $('.scroll-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });
}

function quick_link() {
    $('.quick-link > ul > li > .home').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });
    $('.quick-link > ul > li > .business').click(function () {
        $('html').animate({
            scrollTop: 900
        }, 500);
    });
    $('.quick-link > ul > li > .rentacar').click(function () {
        $('html').animate({
            scrollTop: 1400
        }, 500);
    });
    $('.quick-link > ul > li > .mice').click(function () {
        $('html').animate({
            scrollTop: 1900
        }, 500);
    });
    $('.quick-link > ul > li > .tour').click(function () {
        $('html').animate({
            scrollTop: 2300
        }, 500);
    });
}

function Popup_init() {
    $('.footer .right .site-family > a').click(function () {
        $('.popup').addClass('active');
    });
    $('.popup .head > .btn-close').click(function () {
        $('.popup').removeClass('active');
    })
}

go_top();
quick_link();
Popup_init();
function todaymovie__init() {
    var swiper = new Swiper('.sc-1', {
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
}

function sslide__init() {
    var swiper = new Swiper('.sc-2', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}

function clickMovie__init() {
    $('.t-container .today-movie-list .swiper-slide').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.t-container .today-movie-list .swiper-slide').removeClass('active');
            $(this).addClass('active');
        }
    });
}

clickMovie__init();
todaymovie__init();
sslide__init();
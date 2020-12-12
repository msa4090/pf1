function todaymovie__init() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        loop: true
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
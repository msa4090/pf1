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

function tslide__init() {
    var swiper = new Swiper('.sc-3', {
        slidesPerView: 4.8,
        spaceBetween: 40,
        loop: true,
        centeredSlides: true,
        pagination: {
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3300,
            disableOnInteraction: false,
        }
    });
}

function click__init() {
    $('.click .swiper-slide').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.click .swiper-slide').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.quick-link').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
}

click__init();
todaymovie__init();
sslide__init();
tslide__init();
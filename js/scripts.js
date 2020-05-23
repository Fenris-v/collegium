$(document).ready(() => {
    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', function () {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * FIRST SCREEN SLIDER
     */
    $('.firstScreen__slider').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 2000,
        draggable: false,
        pauseOnFocus: false
    });

    $('.projects__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        margin: 10,
        arrows: true,
        infinite: false,
        dots: false,
        autoplay: false,
        draggable: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.profile__anchor a').on('click', (e) => {
        e.preventDefault();
        let id = $(e.target).attr('href');
        let top = $(id).offset().top - 50;
        $('body, html').animate({scrollTop: top}, 1500);

        $('.profile__anchor').removeClass('profile__anchor_active');
        $(e.target).parents('li').addClass('profile__anchor_active');
    });
});

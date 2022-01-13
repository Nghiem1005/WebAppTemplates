/* Hedaer */
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

/* Slider */

$('.slider-one')
    .not(".slick-intialized")
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider .slider-btn .prev",
        nextArrow: ".site-slider .slider-btn .next",
    })

/* Category */
$('.category-slider')
    .not(".slick-intialized")
    .slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: ".category .category-btn .prev",
        nextArrow: ".category .category-btn .next",
    });
$(window).resize(function () {
    if ($(window).width() < 560) {
        $('.category-slider').slick('slickSetOption', 'slidesToShow', 1)
        $('.category-slider').slick('slickSetOption', 'slidesToScroll', 1)
    } else if ($(window).width() < 992) {
        $('.category-slider').slick('slickSetOption', 'slidesToShow', 2)
        $('.category-slider').slick('slickSetOption', 'slidesToScroll', 2)
    }
    else {
        $('.category-slider').slick('slickSetOption', 'slidesToShow', 4)
        $('.category-slider').slick('slickSetOption', 'slidesToScroll', 4)
    }
});

/* Count down */
let countDateEnd = new Date('January 15, 2022 00:00:00').getTime();
let countDateStart = new Date('January 11, 2022 00:00:00').getTime();

function CountDown() {
    let now = new Date().getTime();
    if (countDateEnd > now && countDateStart < now) {
        gap = countDateEnd - now;

        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor(gap % (day) / hour);
        let m = Math.floor(gap % (hour) / (minute));
        let s = Math.floor(gap % (minute) / second);

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;
    }

}
setInterval(function () {
    CountDown();
}, 1000)
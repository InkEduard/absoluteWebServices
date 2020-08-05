// header
// menu
const burgerBtn = document.querySelector('.navbar-toggler');
const burberBtnIcon = burgerBtn.querySelector('.header__burger');
// serch
const serchBtn = document.querySelector('.header__form-icon');
const serchFormWrap = document.querySelector('.header__form-wrap');

// menu
burgerBtn.addEventListener('click', () => {
    burberBtnIcon.classList.toggle('header__burger');
    burberBtnIcon.classList.toggle('header__burger-close');
})

// serch
serchBtn.addEventListener('click', () => {
    serchBtn.classList.toggle('header__form-icon');
    serchBtn.classList.toggle('header__form-close');
    serchFormWrap.classList.remove('col-xl-4');
    serchFormWrap.classList.remove('col-lg-6');
    serchFormWrap.classList.remove('col-md-6');
    serchFormWrap.classList.remove('col-sm-1');
    serchFormWrap.classList.toggle('active');
    serchFormWrap.classList.toggle('col-12');
})

// headeer scroll
// $(document).ready(function () {
//     var $menu = $("#menu");
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 10 && $menu.hasClass("default")) {
//             $menu.fadeOut('fast', function () {
//                 $(this).removeClass("default").addClass("fixed transbg").fadeIn('fast');
//             });
//         } else if ($(this).scrollTop() <= 10 && $menu.hasClass("fixed")) {
//             $menu.fadeOut('fast', function () {
//                 $(this).removeClass("fixed transbg").addClass("default").fadeIn('fast');
//             });
//         }
//     });//scroll
//     $menu.hover(
//         function () {
//             if ($(this).hasClass('fixed')) {
//                 $(this).removeClass('transbg');
//             }
//         },
//         function () {
//             if ($(this).hasClass('fixed')) {
//                 $(this).addClass('transbg');
//             }
//         });//hover
// });//jQuery

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     let scrollPos = 100;
//     let header = document.getElementById('header-menu');

//     if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
//         header.classList.add('active-scroll');
//     } else {
//         header.classList.remove('active-scroll');
//     }
// }
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('#header-menu').addClass('fixed-header');
        $('.header').addClass('padding-b-plus');
    }
    else {
        $('#header-menu').removeClass('fixed-header');
        $('.header').removeClass('padding-b-plus');
    }
});


// slider
$(document).ready(function () {
    $('#my-carousel').on('initialized.owl.carousel', function () {
        $('.slider__img-navigator').eq(0).addClass('action');
    });

    $('#my-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: true,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        singleItem: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#my-carousel').on('changed.owl.carousel', function (ev) {
        var item_index = ev.page.index;
        $('.slider__img-navigator').removeClass('action').eq(item_index).addClass('action');
    });

    $('.navigator').on('click', function () {
        var item_no = $(this).data('item');
        $('#my-carousel').trigger('to.owl.carousel', [item_no, 1000, true]);
    });
});

// Map settings
function initMap() {
    var pos = { lat: 47.857573, lng: 35.074910 };
    var opt = {
        center: { lat: 47.857573, lng: 35.074910 },
        zoom: 14,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#000000' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#000000' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#292d32' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#292d32' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#f2f6fb' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#292d32' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#292d32' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#0049b0' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#0049b0' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#0049b0' }]
            }
        ]
    }
    var myMap = new google.maps.Map(document.getElementById('map'), opt);
    var info = new google.maps.InfoWindow({
        content: '<h3>ООО «АртАктив», 2017 ©</h3>'
    });
    marker.addListener("click", function () {
        info.open(myMap, marker);
    });
}

// footer tabs
$(document).ready(function () {
    $('.panel-heading').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
    });
});

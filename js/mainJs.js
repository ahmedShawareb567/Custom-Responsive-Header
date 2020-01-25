
//DEFINE CAROUSEL
$('#owl-one').owlCarousel({
    loop:true,
    autoplay: true,
    loop: true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        300:{
            items: 2,
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:6,
            nav:true
        }
    }
});
$('#owl-two').owlCarousel({
    loop:true,
    autoplay: true,
    loop: true,
    margin:10,
    responsiveClass:true,
    items: 1,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    dots: false
});


// INPUT SEARCH FOCUS
let inputSearch = document.getElementById('inputSearch');
inputSearch.addEventListener('focus', () => {
    inputSearch.parentElement.style.border = '.1rem solid #fc4b86';
});
inputSearch.addEventListener('blur', () => {
    inputSearch.parentElement.style.border = '.1rem solid transparent';
});

// HUMBURGER BUTTON IN MENU SECTION
let butnHum = document.querySelector('.navbar-toggler');
butnHum.addEventListener('click', () => {
    butnHum.classList.toggle('hum-active');
});

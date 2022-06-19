if (window.innerWidth < 768) {
    const sliderBrands = document.querySelector('.swiper-brands');
    const sliderTypes = document.querySelector('.swiper-types');
    const sliderServices = document.querySelector('.swiper-services');
    function swiper(numberSlider, classPagination) {
        let mySwiper = new Swiper(numberSlider, {
            breakpoints: {
                320: {
                    slidesPerView: 1.3,
                },
                375: {
                    slidesPerView: 1.5,
                },
                425: {
                    slidesPerView: 1.8,
                },
                600: {
                    slidesPerView: 2,
                },
            },
            pagination: {
                el: classPagination,
                clickable: true,
            },
        });
    }
    swiper(sliderBrands, '.pag-1');
    swiper(sliderTypes, '.pag-2');
    swiper(sliderServices, '.pag-3');
}
export const sliderBrands = document.querySelector('.swiper-brands');
export const sliderTypes = document.querySelector('.swiper-types');
export const sliderServices = document.querySelector('.swiper-services');
if (window.innerWidth < 768) {
    function swiper(numberSlider, classPagination) {
        let newSwiper = new Swiper(numberSlider, {
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

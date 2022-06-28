const slider = document.querySelectorAll('.swiper');
const sliderBrands = document.querySelector('.swiper-brands');
const sliderTypes = document.querySelector('.swiper-types');
const sliderServices = document.querySelector('.swiper-services');
let newSwiper;

function swiper(numberSlider, classPagination) {
  if (window.innerWidth < 768) {
    newSwiper = new Swiper(numberSlider, {
      breakpoints: {
        320: {
          slidesPerView: 1.3,
        },
        375: {
          slidesPerView: 1.5,
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

  } else if (window.innerWidth >= 768) {
    for (let i = 0; i < slider.length; i++) {
      if (slider[i].classList.contains('swiper-initialized')) {
        newSwiper.destroy();
      }
    }
  }
}

swiper(sliderBrands, '.pag-1');
swiper(sliderTypes, '.pag-2');
swiper(sliderServices, '.pag-3');
window.addEventListener('resize', () => {
  swiper(sliderBrands, '.pag-1');
  swiper(sliderTypes, '.pag-2');
  swiper(sliderServices, '.pag-3');
})

export {slider, sliderBrands, sliderTypes, sliderServices, newSwiper, swiper}


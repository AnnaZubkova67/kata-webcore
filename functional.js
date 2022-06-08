const slider = document.querySelector('.swiper');
let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
        document.getElementsByClassName('swiper-pagination')[0].style.display = "block",
        mySwiper = new Swiper(slider, {
            slideClass: "brands",
            watchOverflow: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.2,

                },

                375: {
                    slidesPerView: 1.4,
                },
                425: {
                    slidesPerView: 1.6,
                },
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        slider.dataset.mobile = "true";
    }
    if (window.innerWidth >= 768) {
        slider.dataset.mobile = "false";

        //
        if (slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
            document.getElementsByClassName('swiper-pagination')[0].style.display = "none";

        }

    }
}

mobileSlider();
window.addEventListener('resize', function () {
    mobileSlider();
    click();
});
function click(){
let linkOnwards = document.querySelector('.link-onwards_type_show');
let brandsTypeSony = document.querySelector('.brands_type_sony');
let brandsTypeSonic = document.querySelector('.brands_type_sonic');
let displayBrandsTypeSony = window.getComputedStyle(brandsTypeSony).display;
let displayBrandsTypeSonic = window.getComputedStyle(brandsTypeSonic).display;
let linkHide = document.querySelector('.link-onwards_type_hide');
if (displayBrandsTypeSony == "flex" && displayBrandsTypeSonic == "flex") {
    linkOnwards.addEventListener('click', function () {
        document.getElementsByClassName('brands_type_lenovo-2')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_samsung-2')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_apple-2')[0].style.display = "flex";
        linkOnwards.style.display = "none";
        linkHide.style.display = "flex";
    });
    linkHide.addEventListener('click', function () {
        document.getElementsByClassName('brands_type_lenovo-2')[0].style.display = "none";
        document.getElementsByClassName('brands_type_samsung-2')[0].style.display = "none";
        document.getElementsByClassName('brands_type_apple-2')[0].style.display = "none";
        linkOnwards.style.display = "flex";
        linkHide.style.display = "none";
    });
} else if (displayBrandsTypeSony == "none" && displayBrandsTypeSonic == "none") {
    linkOnwards.addEventListener('click', function () {
        document.getElementsByClassName('brands_type_sony')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_sonic')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_lenovo-2')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_samsung-2')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_apple-2')[0].style.display = "flex";
        linkOnwards.style.display = "none";
        linkHide.style.display = "flex";
    });
    linkHide.addEventListener('click', function () {
        document.getElementsByClassName('brands_type_sony')[0].style.display = "none";
        document.getElementsByClassName('brands_type_sonic')[0].style.display = "none";
        document.getElementsByClassName('brands_type_lenovo-2')[0].style.display = "none";
        document.getElementsByClassName('brands_type_samsung-2')[0].style.display = "none";
        document.getElementsByClassName('brands_type_apple-2')[0].style.display = "none";
        linkOnwards.style.display = "flex";
        linkHide.style.display = "none";
    });
}
}
click();




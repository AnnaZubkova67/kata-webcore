const slider = document.querySelector('.swiper');
let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
        document.getElementsByClassName('swiper-pagination')[0].style.display = "block",
            mySwiper = new Swiper(slider, {
                slideClass: "brands",
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

function click() {
    let linkOnwards = document.querySelector('.link-onwards_type_show');
    let brandsTypeSony = document.querySelector('.brands_type_sony');
    let brandsTypeSonic = document.querySelector('.brands_type_sonic');
    let displayBrandsTypeSony = window.getComputedStyle(brandsTypeSony).display;
    let displayBrandsTypeSonic = window.getComputedStyle(brandsTypeSonic).display;
    let linkHide = document.querySelector('.link-onwards_type_hide');
    let displayLinkOnwards = window.getComputedStyle(linkOnwards).display;
    let displaylinkHide = window.getComputedStyle(linkHide).display;

    function a() {
        document.getElementsByClassName('brands_type_lenovo-2')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_samsung-2')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_apple-2')[0].style.display = "flex";
        linkOnwards.style.display = "none";
        linkHide.style.display = "flex";
    }

    function b() {
        document.getElementsByClassName('brands_type_lenovo-2')[0].style.display = "none";
        document.getElementsByClassName('brands_type_samsung-2')[0].style.display = "none";
        document.getElementsByClassName('brands_type_apple-2')[0].style.display = "none";
        linkOnwards.style.display = "flex";
        linkHide.style.display = "none";
    }

    function c() {
        document.getElementsByClassName('brands_type_sony')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_sonic')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_lenovo-2')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_samsung-2')[0].style.display = "flex";
        document.getElementsByClassName('brands_type_apple-2')[0].style.display = "flex";
        linkOnwards.style.display = "none";
        linkHide.style.display = "flex";
    }

    function d() {
        document.getElementsByClassName('brands_type_sony')[0].style.display = "none";
        document.getElementsByClassName('brands_type_sonic')[0].style.display = "none";
        document.getElementsByClassName('brands_type_lenovo-2')[0].style.display = "none";
        document.getElementsByClassName('brands_type_samsung-2')[0].style.display = "none";
        document.getElementsByClassName('brands_type_apple-2')[0].style.display = "none";
        linkOnwards.style.display = "flex";
        linkHide.style.display = "none";

    }

    if (displayBrandsTypeSony == "flex" && displayBrandsTypeSonic == "flex") {
        linkOnwards.addEventListener('click', a);
        linkHide.addEventListener('click', b);
        window.addEventListener('resize', function () {
            if (window.innerWidth < 768 && (displayLinkOnwards == "flex" || displaylinkHide == "flex")) {
                displayLinkOnwards == "none";
                displaylinkHide == "none";
            }
        });

    } else if (displayBrandsTypeSony == "none" && displayBrandsTypeSonic == "none") {
        linkOnwards.addEventListener('click', c);
        linkHide.addEventListener('click', d);
        console.log(displayLinkOnwards == "flex")
        window.addEventListener('resize', function () {
            if (window.innerWidth < 768 && (displayLinkOnwards == "flex" || displaylinkHide == "flex")) {
                linkOnwards.removeAttribute('style');
                linkHide.removeAttribute('style');
            }
        });
    }
}

click();
window.addEventListener('resize', function () {
    mobileSlider();
    click();
});




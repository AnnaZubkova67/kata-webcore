const slider = document.querySelector('.swiper');
let mySwiper;
function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
        document.querySelector('.swiper-pagination').style.display = "block",
            mySwiper = new Swiper(slider, {
                slideClass: "brands",
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        slider.dataset.mobile = "true";
    }
    if (window.innerWidth >= 768) {
        slider.dataset.mobile = "false";
        if (slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
            document.querySelector('.swiper-pagination').style.display = "none";
        }
    }
}
window.addEventListener('resize', function () {
    mobileSlider();
});
mobileSlider();
    let linkOnwards = document.querySelector('.link-onwards_type_show');
    let content = document.querySelector('.navigation__cards-brands')
    linkOnwards.addEventListener('click', function () {
        if (content.classList.contains("open")) {
            content.classList.remove("open");
            linkOnwards.textContent = "Показать все";
            linkOnwards.classList.remove('hide');
        } else {
            content.classList.toggle('open');
        linkOnwards.classList.add('hide');
            linkOnwards.textContent = "Скрыть";
        }
    });





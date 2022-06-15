const slider = document.querySelector('.swiper');
let mySwiper = new Swiper(slider, {
    slideClass: "brands",
    slidesPerView: 1.3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
if (window.innerWidth >= 768) {
    mySwiper.destroy();
    document.querySelector('.swiper-pagination').style.display = "none";
}
let linkOnwards = document.querySelector('.link-onwards_type_show');
let content = document.querySelector('.navigation__cards')
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





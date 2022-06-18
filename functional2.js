if (window.innerWidth < 768) {
    const slider = document.querySelector('.swiper');
    const slider1 = document.querySelector('.swiper1');
    const slider2 = document.querySelector('.swiper2');
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
    swiper(slider, '.pag-1');
    swiper(slider1, '.pag-2');
    swiper(slider2, '.pag-3');
}

let linkOnwards = document.querySelectorAll('.link-onwards--type--show');
let content = document.querySelectorAll('.content');
for (let i = 0; i < linkOnwards.length; i++) {
    let linkOnward = linkOnwards[i];
    linkOnward.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (content[i].classList.contains("open")) {
            content[i].classList.remove("open");
            linkOnward.textContent = "Показать все";
            linkOnward.classList.remove('hide');
        } else {
            content[i].classList.add('open');
            linkOnward.classList.add('hide');
            linkOnward.textContent = "Скрыть";
        }
    });
}
let buttonCall = document.querySelectorAll('.body__button-call');
let modal = document.querySelector('.modal');
let modalCall = document.querySelector('.modal--type--call');
let modalFeedback = document.querySelector('.modal--type--feedback');
let modalMenu = document.querySelector('.modal--type--menu');
let closed = document.querySelectorAll('.button-closed');
let buttonChat = document.querySelectorAll('.body__button-chat');
let buttonMenu = document.querySelectorAll('.body__button-menu');
let modalContent = document.querySelector('.modal__content');
console.log(modalContent)
function openModal(classModal, buttonModal) {
    for (let i = 0; i < buttonModal.length; i++) {
        buttonModal[i].addEventListener('click', function (evt) {
            if (modalMenu.classList.contains('open-modal')) {
                modalMenu.classList.remove('open-modal')
            }
            evt.preventDefault();
            classModal.classList.add('open-modal');
        });
    }
}
openModal(modalCall, buttonCall);
openModal(modalFeedback, buttonChat);
openModal(modalMenu, buttonMenu);
function closedModal(classModal) {
    for (let i = 0; i < closed.length; i++) {
        closed[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            classModal.classList.remove('open-modal');
        });
    }
}
closedModal(modalCall);
closedModal(modalFeedback);
closedModal(modalMenu);
modal.addEventListener('click', function (evt) {
    evt.preventDefault();
        modalMenu.classList.remove('open-modal');
    document.querySelector('.body__content-menu').addEventListener('click', function (e){
        e.stopPropagation();
    });

});

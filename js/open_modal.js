let buttonCall = document.querySelectorAll('.body__button-call');
let modalCall = document.querySelector('.modal--type--call');
let modalFeedback = document.querySelector('.modal--type--feedback');
let modalMenu = document.querySelector('.modal--type--menu');
let buttonChat = document.querySelectorAll('.body__button-chat');
let buttonMenu = document.querySelectorAll('.body__button-menu');
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
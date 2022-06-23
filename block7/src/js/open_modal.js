export let buttonCall = document.querySelectorAll('.body__button-call');
export let modalCall = document.querySelector('.modal--type--call');
export let modalFeedback = document.querySelector('.modal--type--feedback');
export let modalMenu = document.querySelector('.modal--type--menu');
export let buttonChat = document.querySelectorAll('.body__button-chat');
export let buttonMenu = document.querySelectorAll('.body__button-menu');
export let bodyContent = document.querySelector('.body')
export function openModal(classModal, buttonModal) {
    for (let i = 0; i < buttonModal.length; i++) {
        buttonModal[i].addEventListener('click', function (evt) {
            if (modalMenu.classList.contains('open-modal')) {
                modalMenu.classList.remove('open-modal');
            }
            evt.preventDefault();
            classModal.classList.add('open-modal');
          bodyContent.style.overflow = 'hidden';
        });
    }
}
openModal(modalCall, buttonCall);
openModal(modalFeedback, buttonChat);
openModal(modalMenu, buttonMenu);
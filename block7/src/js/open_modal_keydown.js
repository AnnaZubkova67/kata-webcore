export let modalCall = document.querySelector('.modal--type--call');
export let buttonCall = document.querySelectorAll('.body__button-call');
export let modalFeedback = document.querySelector('.modal--type--feedback');
export let modalMenu = document.querySelector('.modal--type--menu');
export let buttonChat = document.querySelectorAll('.body__button-chat');
export let buttonMenu = document.querySelectorAll('.body__button-menu');
export let bodyContent = document.querySelector('.body')
export function openModalKeydown(classModal, buttonModal) {
  for (let i = 0; i < buttonModal.length; i++) {
    buttonModal[i].addEventListener('keydown', function (evt) {
      if (classModal.classList.contains('open-modal')) {
        classModal.classList.remove('open-modal');
      }
      evt.preventDefault();
      classModal.classList.add('open-modal');
      bodyContent.style.overflow = 'hidden';
    });
  }
}
openModalKeydown(modalCall, buttonCall);
openModalKeydown(modalFeedback, buttonChat);
openModalKeydown(modalMenu, buttonMenu);

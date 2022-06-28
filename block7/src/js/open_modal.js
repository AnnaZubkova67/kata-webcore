let buttonCall = document.querySelectorAll('.button--type--call');
let modalCall = document.querySelector('.modal--type--call');
let modalFeedback = document.querySelector('.modal--type--feedback');
let modalMenu = document.querySelector('.modal--type--menu');
let buttonChat = document.querySelectorAll('.button--type--chat');
let buttonMenu = document.querySelectorAll('.button--type--menu');
let bodyContent = document.querySelector('.body')

function openModal(classModal, buttonModal, method) {
  for (let i = 0; i < buttonModal.length; i++) {
    buttonModal[i].addEventListener(method, function (evt) {
      if ((method === 'keydown' && evt.keyCode === 13) || method === 'click') {
        if (modalMenu.classList.contains('open-modal')) {
          modalMenu.classList.remove('open-modal');
        }
        evt.preventDefault();
        classModal.classList.add('open-modal');
        bodyContent.style.overflow = 'hidden';
      }
    });
  }
}

openModal(modalCall, buttonCall, 'click');
openModal(modalFeedback, buttonChat, 'click');
openModal(modalMenu, buttonMenu, 'click');
openModal(modalCall, buttonCall, 'keydown');
openModal(modalFeedback, buttonChat, 'keydown');
openModal(modalMenu, buttonMenu, 'keydown');

export {buttonCall , modalCall, modalFeedback, modalMenu, buttonChat, buttonMenu , bodyContent, openModal}
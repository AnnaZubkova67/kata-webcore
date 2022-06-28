let modal = document.querySelectorAll('.modal');
let modalContent = document.querySelectorAll('.content-modal');
let closed = document.querySelectorAll('.button-closed');
let modalCall = document.querySelector('.modal--type--call');
let modalFeedback = document.querySelector('.modal--type--feedback');
let modalMenu = document.querySelector('.modal--type--menu');
let bodyContent = document.querySelector('.body')

function closedModal(classModal, method) {
  for (let i = 0; i < closed.length; i++) {
    closed[i].addEventListener(method, function (evt) {
      if ((method === 'keydown' && evt.keyCode === 13) || method === 'click') {
        evt.preventDefault();
        classModal.classList.remove('open-modal');
        bodyContent.style.overflow = 'auto';
      }
    });

  }
  for (let i = 0; i < modal.length; i++) {
    modalContent[i].addEventListener('click', function (e) {
      e.stopPropagation();
    });
    modal[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      classModal.classList.remove('open-modal');
      bodyContent.style.overflow = 'auto';
    });
  }
  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      classModal.classList.remove('open-modal');
      bodyContent.style.overflow = 'auto';
    }
  });
}

closedModal(modalCall, 'click');
closedModal(modalFeedback, 'click');
closedModal(modalMenu, 'click');
closedModal(modalCall, 'keydown');
closedModal(modalFeedback, 'keydown');
closedModal(modalMenu, 'keydown');

export {modal, modalContent,closed, bodyContent, closedModal}

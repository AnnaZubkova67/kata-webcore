export let modal = document.querySelectorAll('.modal');
export let modalContent = document.querySelectorAll('.content-modal');
export let modalCall = document.querySelector('.modal--type--call');
export let modalFeedback = document.querySelector('.modal--type--feedback');
export let modalMenu = document.querySelector('.modal--type--menu');
export let bodyContent = document.querySelector('.body')

export function closedModalBlur(classModal) {
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
}

closedModalBlur(modalCall);
closedModalBlur(modalFeedback);
closedModalBlur(modalMenu);

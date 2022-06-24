export let closed = document.querySelectorAll('.button-closed');
export let modalCall = document.querySelector('.modal--type--call');
export let modalFeedback = document.querySelector('.modal--type--feedback');
export let modalMenu = document.querySelector('.modal--type--menu');
export let bodyContent = document.querySelector('.body')
export function closedModalKeydown(classModal) {
  for (let i = 0; i < closed.length; i++) {
    closed[i].addEventListener('keydown', function (evt) {
      evt.preventDefault();
      classModal.classList.remove('open-modal');
      bodyContent.style.overflow = 'auto';
    });
  }
}
closedModalKeydown(modalCall);
closedModalKeydown(modalFeedback);
closedModalKeydown(modalMenu);
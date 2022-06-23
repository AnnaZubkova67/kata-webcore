export let closed = document.querySelectorAll('.button-closed');
export let modalCall = document.querySelector('.modal--type--call');
export let modalFeedback = document.querySelector('.modal--type--feedback');
export let modalMenu = document.querySelector('.modal--type--menu');
export let bodyContent = document.querySelector('.body')
export function closedModal(classModal) {
    for (let i = 0; i < closed.length; i++) {
        closed[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            classModal.classList.remove('open-modal');
          bodyContent.style.overflow = 'auto';
        });
    }
}
closedModal(modalCall);
closedModal(modalFeedback);
closedModal(modalMenu);
let closed = document.querySelectorAll('.button-closed');
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
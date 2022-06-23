export let modal = document.querySelector('.modal');
export let modalMenu = document.querySelector('.modal--type--menu');
modal.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMenu.classList.remove('open-modal');
    document.querySelector('.body__content-menu').addEventListener('click', function (e){
        e.stopPropagation();
    });
});
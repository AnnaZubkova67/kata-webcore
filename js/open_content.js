export let linkOnwards = document.querySelectorAll('.link-onwards--type--show');
export let content = document.querySelectorAll('.content');
for (let i = 0; i < linkOnwards.length; i++) {
    let linkOnward = linkOnwards[i];
    linkOnward.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (content[i].classList.contains("open")) {
            content[i].classList.remove("open");
            linkOnward.textContent = "Показать все";
            linkOnward.classList.remove('hide');
        } else {
            content[i].classList.add('open');
            linkOnward.classList.add('hide');
            linkOnward.textContent = "Скрыть";
        }
    });
}
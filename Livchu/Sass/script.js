const dropDownButton = document.querySelector('.drop-down-button');

dropDownButton.addEventListener('click', function openMenu() {
    let dropDownContent = document.querySelector('.drop-down-content');
    dropDownContent.classList.toggle('drop-down-content-open');
});

const scroll = new SmoothScroll ('a[href*="#"]', {
    speed: 700,
});


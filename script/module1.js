var colorisdark = false;

buttonscreen.addEventListener('click', toggleColor);
updateColor();

function toggleColor() {
    colorisdark = !colorisdark;
    updateColor();
}

function updateColor() {
    if (colorisdark) {
        screen.style.background = '#171717'
    } else {
        screen.style.background = '#d6d7d7'
    }
}
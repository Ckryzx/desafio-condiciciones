const img = document.getElementById('imagen');
img.addEventListener('click', () => {
    if (img.style.border) {
        img.style.border = '';
    } else {
        img.style.border = '2px solid red';
    }
});
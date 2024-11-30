document.getElementById('verificar').addEventListener('click', () => {
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;

    const password = select1 + select2 + select3;
    const mensaje = document.getElementById('mensaje');

    if (password === '911') {
        mensaje.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        mensaje.textContent = 'Password 2 correcto';
    } else {
        mensaje.textContent = 'Password incorrecto';
    }
});
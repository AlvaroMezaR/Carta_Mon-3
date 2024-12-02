// script.js
document.querySelector('.reveal-button').addEventListener('click', function() {
    const hiddenMessage = document.querySelector('.hidden-message');
    hiddenMessage.classList.toggle('show'); // Alternar la visibilidad del mensaje oculto
});

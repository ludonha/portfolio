var inputNome = document.querySelector('[data-input-nome]');
var inputEmail = document.querySelector('[data-input-email]')

inputNome.addEventListener ('focus', () => {
    var label = document.getElementsByClassName('formulario__label');
    label[0].style.color = '#2A7AE4';

})
inputEmail.addEventListener ('focus', () => {
    var label = document.getElementsByClassName('formulario__label');
    label[1].style.color = '#2A7AE4';

})
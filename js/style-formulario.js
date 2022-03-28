export var inputNome = document.querySelector('[data-input-nome]');

export const corLabel = () =>{
    var label = document.querySelector('formulario__label');
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = '#2A7AE4';
        
    }
    
}
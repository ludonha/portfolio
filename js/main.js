import { corLabel, inputNome } from "./style-formulario.js"
import { botaoEnviar, validaFormulario } from "./validacao-formulario.js"

botaoEnviar.addEventListener('click', () =>{
    validaFormulario()
})

inputNome.addEventListener ('focus', () => {
    corLabel()
})
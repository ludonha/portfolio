var formulario = document.getElementById('formulario');

export var botaoEnviar = document.querySelector('[data-form-botao]');

export const validaFormulario = () => {

    if ( formulario.nome.value.trim() === "") {
        console.log("Campo 'nome' não pode estar em branco.")
    }else if ( formulario.email.value.indexOf(".") == -1 ) {
        console.log("Campo 'e-mail' deve ter '.com' no final.")
    }else if ( formulario.assunto.value.trim() === "") {
        console.log("Campo 'Assunto' não pode estar em branco.")
    }else if ( formulario.mensagem.value.trim() === "") {
        console.log("Campo 'Mensagem' não pode estar em branco.")
    }else {
        alert("Formulário enviado com sucesso!")
    }


}
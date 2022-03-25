var botaoEnviar = document.querySelector('[data-form-botao]');

var formulario = document.getElementById('formulario');

const validaFormulario = () => {

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

botaoEnviar.addEventListener('click', () =>{
    
    validaFormulario()

})
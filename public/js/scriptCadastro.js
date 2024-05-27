const listaNumerosValidacao = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function acessarLogin() {
    window.location.href = './login.html'
}

function validacoesCadastro() {
    const nome = input_nome.value;
    const sobrenome = input_sobrenome.value;
    const email = input_email.value;
    const senha = input_senha.value;

    const quantidadeNumerosValidacao = listaNumerosValidacao.length;
    for (let posicao = 0;
        posicao < quantidadeNumerosValidacao;
        posicao++
    ) {
        // let senhaContemNumero = true;
         
        if (senha.indexOf(listaNumerosValidacao[posicao]) < 0) {
            alert(`Por favor, senha deve conter número!`);
            posicao = quantidadeNumerosValidacao;
        }
    }

    if (nome == '') {
        alert(`Por favor, preencha o campo "Nome"!`);
    } else if (sobrenome == '') {
        alert(`Por favor, preencha o campo "Sobrenome"!`);
    } else if (email == '') {
        alert(`Por favor, preencha o campo "Email"!`);
    } else if (senha == '') {
        alert(`Por favor, preencha o campo "Senha"!`);
    } else if (email.indexOf('@') < 0) {
        alert(`Por favor, o campo "Email" deve conter o caractere "@"!`);
    } else if (email.indexOf('.com') < 0) {
        alert(`Por favor, insira ".com"!`);
    } else if (senha.length < 8) {
        alert(`Por favor, insira pelo menos 8 caracteres no campo "Senha"!`);
    } else { 
        // CADASTRAR NO BANCO       
    }
}

function cadastrarUsuario() {
    validacoesCadastro();

}
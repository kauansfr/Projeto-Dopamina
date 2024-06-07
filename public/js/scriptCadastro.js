const listaNumerosValidacao = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const quantidadeNumerosValidacao = listaNumerosValidacao.length;

function acessarIndex() {
    window.location.href = './index.html';
}

function acessarLogin() {
    window.location.href = './login.html';
}

function validacoesCadastro() {
    const nome = input_nome.value;
    const sobrenome = input_sobrenome.value;
    const email = input_email.value;
    const senha = input_senha.value;

    let passouValidacao = false;

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
    } else if (!SenhaNaoTemNumero()) {
        alert(`Por favor, senha deve conter número!`);
    } else {
        passouValidacao = true;
    }

    return passouValidacao;
}

function SenhaNaoTemNumero() {
    const senha = input_senha.value;

    for (let posicao = 0;
        posicao < quantidadeNumerosValidacao;
        posicao++
    ) {
        if (senha.indexOf(listaNumerosValidacao[posicao]) == -1) {
            return true;
        } else {
            return false;
        }
    }
}

function cadastrarUsuario() {
    const nome = input_nome.value;
    const sobrenome = input_sobrenome.value;
    const email = input_email.value;
    const senha = input_senha.value;
    const despertaDopamina = select_despertaDopamina.value;

    if (validacoesCadastro()) {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                sobrenomeServer: sobrenome,
                emailServer: email,
                senhaServer: senha,
                despertaDopaminaServer: despertaDopamina
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    }
}
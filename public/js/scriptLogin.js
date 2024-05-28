function acessarCadastro() {
    window.location.href = './cadastro.html';
}

function validacoesLogin() {
    var email = input_email.value;
    var senha = input_senha.value;

    if (email == '' || senha == '') {
        alert(`Por favor, preencha os campos "Email" e "Senha"`)
    }
}

function usuarioLogado() {
    validacoesLogin();

    var email = input_email.value;
    var senha = input_senha.value;

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "./dashboard.html";
                }, 1000); // apenas para exibir o loading
            });

        } else {
            console.log("Houve um erro ao tentar realizar o login!");
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}
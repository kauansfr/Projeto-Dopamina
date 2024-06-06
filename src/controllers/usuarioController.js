var usuarioModel = require("../models/usuarioModel");

function coletarDadosTotais(req, res) {
    usuarioModel.coletarDadosTotais()
    .then(function (resultadoColetarDadosTotais) {
        if (resultadoColetarDadosTotais.length > 0) {
            console.log("Dados coletados:", resultadoColetarDadosTotais);
            res.status(200).json({
                totalJogadores: resultadoColetarDadosTotais[0].totalJogadores,
                mediaTempoConclusao: resultadoColetarDadosTotais[0].mediaTempoConclusao
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    })
    .catch(function (erro) {
        console.error("Erro ao coletar dados:", erro);
        res.status(500).send("Erro no servidor");
    });
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
        .then(function (resultadoAutenticar) {
            if (resultadoAutenticar.length == 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else if (resultadoAutenticar.length > 1) {
                res.status(500).send("Mais de um usuário com o mesmo login e senha!");
            } else {
                // Aqui retornamos os dados do usuário com status 200 (OK)
                console.log(resultadoAutenticar)
                res.status(200).json({
                    id: resultadoAutenticar[0].idUsuario,
                    nome: resultadoAutenticar[0].nomeUsuario,
                    sobrenome: resultadoAutenticar[0].sobrenomeUsuario,
                    email: resultadoAutenticar[0].emailUsuario
                });
                
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var despertaDopamina = req.body.despertaDopaminaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, email, senha, despertaDopamina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    coletarDadosTotais
}
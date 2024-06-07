var cruzadinhaModel = require("../models/cruzadinhaModel");

function coletarIdCruzadinhaAtual(req, res) {

    cruzadinhaModel.coletarIdCruzadinhaAtual()
        .then(function (resultado) {
            if (resultado.length == 0) {
                res.status(403).send("Nenhum idCruzadinha coletado");
            } else {
                // Aqui retornamos os dados do usuário com status 200 (OK)
                console.log(resultado);
                res.status(200).json({
                    idCruzadinhaAtual: resultado[0].idCruzadinhaAtual
                });
            }
        }).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inserirInicioCruzadinha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    const idUsuario = req.body.idUsuarioServer;
    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        cruzadinhaModel.inserirInicioCruzadinha(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao tentar coletar seu ID! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizarConclusaoCruzadinha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    const idUsuario = req.body.idUsuarioServer;
    const idCruzadinhaAtual = req.body.idCruzadinhaAtualServer;
    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        cruzadinhaModel.atualizarConclusaoCruzadinha(idUsuario, idCruzadinhaAtual)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao tentar coletar seu ID! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    coletarIdCruzadinhaAtual,
    inserirInicioCruzadinha,
    atualizarConclusaoCruzadinha
};
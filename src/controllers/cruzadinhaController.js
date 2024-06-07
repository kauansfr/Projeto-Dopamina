var cruzadinhaModel = require("../models/cruzadinhaModel");

function coletarIdCruzadinhaAtual(req, res) {
    cruzadinhaModel.coletarIdCruzadinhaAtual()
        .then(function (resultado) {
            if (resultado.length == 0) {
                res.status(403).send("Nenhum idCruzadinha coletado");
            } else {
                res.status(200).json({
                    idCruzadinhaAtual: resultado[0].idCruzadinhaAtual
                });
            }
        }).catch(
            function (erro) {
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inserirInicioCruzadinha(req, res) {
    const idUsuario = req.body.idUsuarioServer;
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else {
        cruzadinhaModel.inserirInicioCruzadinha(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizarConclusaoCruzadinha(req, res) {
    const idUsuario = req.body.idUsuarioServer;
    const idCruzadinhaAtual = req.body.idCruzadinhaAtualServer;
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else {
        cruzadinhaModel.atualizarConclusaoCruzadinha(idUsuario, idCruzadinhaAtual)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function registrarResultado(req, res) {
    const idUsuario = req.params.idUsuario;
    const idCruzadinhaAtual = req.params.idCruzadinhaAtual;
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else {
        cruzadinhaModel.registrarResultado(idUsuario, idCruzadinhaAtual)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    coletarIdCruzadinhaAtual,
    inserirInicioCruzadinha,
    atualizarConclusaoCruzadinha,
    registrarResultado
};

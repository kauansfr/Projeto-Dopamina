var graficoModel = require("../models/graficoModel");

function dadosGraficos(req, res) {
    graficoModel.dadosGraficos()
    .then(function (resultadodadosGraficos) {
        if (resultadodadosGraficos.length > 0) {
            console.log("Dados coletados:", resultadodadosGraficos);
            res.status(200).json({
                ouvirMusica: resultadodadosGraficos[0].ouvirMusica,
                atvFisica: resultadodadosGraficos[0].atvFisica,
                ler: resultadodadosGraficos[0].ler,
                comerSaudavel: resultadodadosGraficos[0].comerSaudavel,
                atvCriativas: resultadodadosGraficos[0].atvCriativas,
                meditacao: resultadodadosGraficos[0].meditacao,
                disciplina: resultadodadosGraficos[0].disciplina
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

module.exports = {
    dadosGraficos
};
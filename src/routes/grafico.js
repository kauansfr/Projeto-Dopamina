var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");


router.get("/obterRanking", function (req, res) {
    graficoController.obterRanking(req, res);
});

router.get("/dadosGraficos", function (req, res) {
    graficoController.dadosGraficos(req, res);
});

router.get("/atividadeMaisEscolhida", function (req,res) { 
    graficoController.atividadeMaisEscolhida(req,res);
});

module.exports = router;
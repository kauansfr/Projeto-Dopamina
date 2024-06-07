var express = require("express");
var router = express.Router();

var cruzadinhaController = require("../controllers/cruzadinhaController");

router.get("/coletarIdCruzadinhaAtual", function (req, res) {
    cruzadinhaController.coletarIdCruzadinhaAtual(req, res);
});

router.post("/inserirInicioCruzadinha", function (req, res) {
    cruzadinhaController.inserirInicioCruzadinha(req, res);
});

router.put("/atualizarConclusaoCruzadinha", function (req, res) {
    cruzadinhaController.atualizarConclusaoCruzadinha(req, res);
});

module.exports = router;
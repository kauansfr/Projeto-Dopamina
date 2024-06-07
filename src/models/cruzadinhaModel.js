var database = require("../database/config");

function coletarIdCruzadinhaAtual() {
    var instrucaoSql = `
        select max(idCruzadinha) as idCruzadinhaAtual from cruzadinha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirInicioCruzadinha(idUsuario) {
    var instrucaoSql = `
        INSERT INTO cruzadinha (fkUsuario, inicio, conclusao) VALUES ('${idUsuario}', default, null);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarConclusaoCruzadinha(idUsuario, idCruzadinhaAtual) {
    var instrucaoSql = `
        update cruzadinha set conclusao = default where fkUsuario = ${idUsuario} and idCruzadinha = ${idCruzadinhaAtual};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    coletarIdCruzadinhaAtual,
    inserirInicioCruzadinha,
    atualizarConclusaoCruzadinha
}
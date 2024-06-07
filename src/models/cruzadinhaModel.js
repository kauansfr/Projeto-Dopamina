var database = require("../database/config");

function coletarIdCruzadinhaAtual() {
    var instrucaoSql = `
        select max(idCruzadinha) as idCruzadinhaAtual from cruzadinha;
    `;
    return database.executar(instrucaoSql);
}

function inserirInicioCruzadinha(idUsuario) {
    var instrucaoSql = `
        INSERT INTO cruzadinha (fkUsuario, inicio, conclusao) VALUES ('${idUsuario}', default, null);
    `;
    return database.executar(instrucaoSql);
}

function atualizarConclusaoCruzadinha(idUsuario, idCruzadinhaAtual) {
    var instrucaoSql = `
        update cruzadinha set conclusao = current_timestamp where fkUsuario = ${idUsuario} and idCruzadinha = ${idCruzadinhaAtual};
    `;
    return database.executar(instrucaoSql);
}

function registrarResultado(idUsuario, idCruzadinhaAtual) {
    var instrucaoSql = `
        insert into resultado (fkUsuario, tempo)
        select ${idUsuario}, timestampdiff(second, inicio, conclusao)
        from cruzadinha
        where idCruzadinha = ${idCruzadinhaAtual} and fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    coletarIdCruzadinhaAtual,
    inserirInicioCruzadinha,
    atualizarConclusaoCruzadinha,
    registrarResultado
}

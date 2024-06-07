var database = require("../database/config")

function coletarDadosTotais() {
    var instrucaoSql = `
    select
        (select count(idUsuario) from usuario) as totalJogadores,
        (select round(avg(timestampdiff(second, inicio, conclusao))) from cruzadinha) as mediaTempoConclusao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nomeUsuario, sobrenomeUsuario, emailUsuario, despertaDopamina FROM usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome, email, senha, despertaDopamina) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario, despertaDopamina) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}', '${despertaDopamina}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    coletarDadosTotais
};
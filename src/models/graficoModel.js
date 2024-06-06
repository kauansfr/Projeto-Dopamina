var database = require("../database/config")

function dadosGraficos() {
    var instrucaoSql = `
    select
        (select count(despertaDopamina) from usuario where despertaDopamina = 'ouvirMusica') as 'ouvirMusica',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'atvFisica') as 'atvFisica',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'ler') as 'ler',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'comerSaudavel') as 'comerSaudavel',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'atvCriativas') as 'atvCriativas',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'meditacao') as 'meditacao',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'disciplina') as 'disciplina';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    dadosGraficos
};
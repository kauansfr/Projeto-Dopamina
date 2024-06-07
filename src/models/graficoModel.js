var database = require("../database/config");

function obterRanking() {
    var instrucaoSql = `
        select nomeUsuario, MIN(tempo) as melhorTempo
        from resultado
        join usuario on fkUsuario = idUsuario
        group by nomeUsuario
        order by melhorTempo ASC;
    `;
    return database.executar(instrucaoSql);
}



function dadosGraficos() {
    var instrucaoSql = `
    select
        (select count(despertaDopamina) from usuario where despertaDopamina = 'Ouvir Música') as 'ouvirMusica',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'Atividade Física') as 'atvFisica',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'Ler') as 'ler',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'Comer Saudável') as 'comerSaudavel',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'Atividades Criativas') as 'atvCriativas',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'Meditação') as 'meditacao',
        (select count(despertaDopamina) from usuario where despertaDopamina = 'Disciplina') as 'disciplina';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atividadeMaisEscolhida() {
    var instrucaoSql = `
        select despertaDopamina, count(*) as quantidade
        from usuario
        group by despertaDopamina
        having quantidade = (
            select max(quantidade) 
            from (
                select count(*) as quantidade 
                from usuario 
                group by despertaDopamina
            ) as subquery
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterRanking,
    dadosGraficos,
    atividadeMaisEscolhida
};

const container_dashboard = document.querySelector('.container_content1');
const container_ranking = document.querySelector('.container_content2');



function carregarRanking() {
    fetch("/grafico/obterRanking")
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.log("Erro ao obter ranking.");
                throw new Error("Erro ao obter ranking");
            }
        })
        .then(function (json) {
            console.log("Dados recebidos:", json);
            // Verifica se há dados recebidos
            if (json && json.length > 0) {
                // Chama a função para exibir o ranking apenas se houver dados
                exibirRanking(json);
            } else {
                console.log("Nenhum dado de ranking recebido.");
                // Aqui você pode exibir uma mensagem ou tomar outra ação, como mostrar um ranking vazio
            }
        })
        .catch(function (erro) {
            console.error("Erro ao obter ranking:", erro);
            // Trata o erro adequadamente, como exibir uma mensagem de erro para o usuário
        });
}

function exibirRanking(ranking) {
    // Seleciona todas as divs de posição do ranking
    let posicoes = document.querySelectorAll(".container_positions > div");

    // Itera sobre os dados do ranking e atualiza os valores nas divs correspondentes
    ranking.forEach((item, index) => {
        // Verifica se o índice está dentro do intervalo de posições existentes
        if (index < posicoes.length) {
            // Seleciona a div de nome do jogador na posição atual
            let nomeJogadorDiv = posicoes[index].querySelector(".underlinePlayerName");
            // Atualiza o texto da div com o nome do jogador
            if (nomeJogadorDiv) {
                nomeJogadorDiv.textContent = `${item.nomeUsuario} - ${item.melhorTempo} s`;
            } else {
                console.error("Elemento de nome de jogador não encontrado na posição", index);
            }
        } else {
            console.error("Posição fora do intervalo:", index);
        }
    });
}

function loadPage(){
    plotarNome();
    carregarRanking();
}



function aparecerDashboard() {
    container_dashboard.style.display = 'block';
    container_ranking.style.display = 'none';
    atividadeMaisEscolhida();
    totalJogadores();
    exibirDadosGraficos();
    
}

function aparecerRanking() {
    container_ranking.style.display = 'block';
    container_dashboard.style.display = 'none';

}



function totalJogadores() {
    fetch("/usuarios/coletarDadosTotais")
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!");

            if (resposta.ok) {
                return resposta.json();
            } else {
                return console.log("Dados não coletados!");
            }
        })
        .then(function (json) {
            console.log("Dados recebidos:", json);
            sessionStorage.TOTAL_JOGADORES = json.totalJogadores;
            sessionStorage.MEDIA_TEMPO_CONCLUSAO = json.mediaTempoConclusao;
            exibirDadosDashboard();
        })
        .catch(function (erro) {
            console.error("Erro:", erro);
        });
}



function atividadeMaisEscolhida() {
    fetch("/grafico/atividadeMaisEscolhida")
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                return console.log("Dados não coletados!");
            }
        })
        .then(function (json) {
            if (json.length > 0) {
                let atividades = json.map(item => item.despertaDopamina).join(', ');
                document.getElementById("inner_atvMaisEscolhida").innerText = `${atividades}`;
            } else {
                document.getElementById("inner_atvMaisEscolhida").innerText = "Nenhuma atividade";
            }
        })
        .catch(function (erro) {
            console.error("Erro:", erro);
        });
}

function exibirDadosGraficos() {
    const ctx1 = document.getElementById('myChart1');

    var graficoBarras1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Ouvir Música', 'Atividade Física', 'Ler', 'Comer Saudável', 'Atividades Criativas', 'Meditação', 'Disciplina'],
            datasets: [{
                label: 'Qntd. de Votos',
                data: [],
                backgroundColor: '#ffffff',
                borderColor: '#2c2929',
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Cor das fontes da legenda
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff', // Cor das fontes do eixo y
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Cor dos traços de fundo do eixo y com opacidade reduzida
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff', // Cor das fontes do eixo x
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Cor dos traços de fundo do eixo x com opacidade reduzida
                    }
                }
            }
        }
    });

    fetch('/grafico/dadosGraficos')
        .then(resposta => resposta.json())
        .then(data => {
            graficoBarras1.data.datasets[0].data = [
                data.ouvirMusica,
                data.atvFisica,
                data.ler,
                data.comerSaudavel,
                data.atvCriativas,
                data.meditacao,
                data.disciplina
            ];
            graficoBarras1.update();
        })
        .catch(error => {
            console.error('Erro ao buscar dados do gráfico:', error);
        });
}

function exibirDadosDashboard() {
    let totalJogadores = sessionStorage.TOTAL_JOGADORES;

    let exibirTotalJogadores = document.getElementById("inner_totalJogadores");

    exibirTotalJogadores.innerHTML = `${totalJogadores}`;
}

function acessarPalavrasCruzadas() {
    window.location.href = 'cruzadinha.html';
}
function acessarIndex() {
    window.location.href = 'index.html';
}
function acessarDash() {
    window.location.href = 'dashboardDopa.html';
}

function plotarNome() {
    let nomeUsuario = sessionStorage.NOME_USUARIO

    let nomeBox = document.getElementById('nomeBox')

    nomeBox.innerHTML = `<h2>${nomeUsuario}</h2>`
}
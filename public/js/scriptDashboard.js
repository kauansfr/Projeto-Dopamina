const container_dashboard = document.querySelector('.container_content1');
const container_ranking = document.querySelector('.container_content2');

function aparecerDashboard() {
    container_dashboard.style.display = 'block';
    container_ranking.style.display = 'none';
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
                console.log("Dados não coletados!");
                return Promise.reject("Erro na resposta da API");
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

function exibirDadosGraficos() {
    const ctx1 = document.getElementById('myChart1');

    var graficoBarras1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Ouvir Música', 'Atividade Física', 'Ler', 'Comer Saudável', 'Atividades Criativas', 'Meditação', 'Disciplina'],
            datasets: [{
                label: 'Estatísticas Globais',
                data: [],
                backgroundColor: '#fc29d2', // Cor de fundo
                borderColor: '#ffffff', // Cor da borda branca
                borderWidth: 1
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
    let mediaTempoConclusao = sessionStorage.MEDIA_TEMPO_CONCLUSAO;

    let exibirTotalJogadores = document.getElementById("inner_totalJogadores");
    let exibirMediaTempoConclusao = document.getElementById("inner_mediaTempoConclusao");

    if (mediaTempoConclusao == 'null') {
        mediaTempoConclusao = 0;
    }
    exibirTotalJogadores.innerHTML = `${totalJogadores}`;
    exibirMediaTempoConclusao.innerHTML = `${mediaTempoConclusao}`;
}

function acessarPalavrasCruzadas() {
    window.location.href = 'cruzadinha.html';
}
function acessarIndex() {
    window.location.href = 'index.html';
}
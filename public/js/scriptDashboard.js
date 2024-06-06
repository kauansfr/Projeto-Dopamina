const ctx = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Player 1', 'Player 2', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function acessarIndex() {
    window.location.href = 'index.html';
}

const container_dashboard = document.querySelector('.container_content1');
const container_ranking = document.querySelector('.container_content2');

function aparecerDashboard() {
    container_dashboard.style.display = 'block';
    container_ranking.style.display = 'none';
}

function aparecerRanking() {
    container_ranking.style.display = 'block';
    container_dashboard.style.display = 'none';
}
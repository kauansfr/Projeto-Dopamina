const cerebro = document.querySelector('.brain_img');
const dopamina = document.querySelector('.box_dopamina');
const atividadeFisica = document.querySelector('.box_atividadeFisica');
const rotina = document.querySelector('.box_controleRotina');
const sobreMim = document.querySelector('.box_sobreMim');
const esconderLogin = document.querySelector('.esconderLogin');
const buttonLogin = document.getElementById('button_login');


function aparecerDopamina() {
    dopamina.style.display = 'flex';
    atividadeFisica.style.display = 'flex';
    rotina.style.display = 'flex';
    sobreMim.style.display = 'flex';
    esconderLogin.style.display = 'none';
    // buttonLogin.style.display = 'flex';
    setTimeout(animacaoDopamina, 1);

    desacelerarPulse_Cerebro();
}

function animacaoDopamina() {
    dopamina.style.transform = 'translateX(-12rem)';
    atividadeFisica.style.transform = 'translateX(12rem)';
    rotina.style.transform = 'translateX(-12rem)';
    sobreMim.style.transform = 'translateX(12rem)';
    buttonLogin.style.transform = 'translateX(-1%)';

}

function desacelerarPulse_Cerebro() {
    cerebro.style.animation = 'pulse_OnClick 2000ms infinite';
}
// FUNÇÃO PARA VOLTAR AS DIVS E NO FINAL DO CÓDIGO CHAMAR OUTRA FUNÇÃO COM setTIMOUT PARA DISPLAY NONE



function acessarLogin() {
    window.location.href = './login.html';
}

function acessarDopamina() {
    window.location.href = './dopamina.html';
}
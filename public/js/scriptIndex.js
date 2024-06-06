const cerebro = document.querySelector('.brain_img');
const dopamina = document.querySelector('.box_dopamina');
const atividadeFisica = document.querySelector('.box_atividadeFisica');
const rotina = document.querySelector('.box_controleRotina');
const sobreMim = document.querySelector('.box_sobreMim');
const buttonLogin = document.getElementById('button_login');

let controleAbrirFechar = true;

function aparecerDivs() {

    if (controleAbrirFechar) {
        controleAbrirFechar = false;

        dopamina.style.display = 'flex';
        atividadeFisica.style.display = 'flex';
        rotina.style.display = 'flex';
        sobreMim.style.display = 'flex';
        setTimeout(animacaoDivsAbrir, 1);

        desacelerarPulse_Cerebro();
    } else {
        controleAbrirFechar = true;
        animacaoDivsFechar();

        setTimeout(function () {
            dopamina.style.display = 'none';
            atividadeFisica.style.display = 'none';
            rotina.style.display = 'none';
            sobreMim.style.display = 'none';
        }, 550);

        acelerarPulse_Cerebro();
    }
}

function sumirDopamina() {

}

function animacaoDivsAbrir() {
    dopamina.style.transform = 'translateX(-12rem)';
    atividadeFisica.style.transform = 'translateX(12rem)';
    rotina.style.transform = 'translateX(-12rem)';
    sobreMim.style.transform = 'translateX(12rem)';
    buttonLogin.style.transform = 'translateX(-1%)';

}

function animacaoDivsFechar() {
    dopamina.style.transform = 'translateX(12rem)';
    atividadeFisica.style.transform = 'translateX(-12rem)';
    rotina.style.transform = 'translateX(12rem)';
    sobreMim.style.transform = 'translateX(-12rem)';
    buttonLogin.style.transform = 'translateX(6%)';
}

function desacelerarPulse_Cerebro() {
    cerebro.style.animation = 'pulse_OnClick 2000ms infinite';
}

function acelerarPulse_Cerebro() {
    cerebro.style.animation = 'pulse 1200ms infinite;';
}


function acessarLogin() {
    window.location.href = './login.html';
}

function acessarDopamina() {
    window.location.href = './dopamina.html';
}
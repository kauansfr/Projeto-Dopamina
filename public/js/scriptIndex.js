const cerebro = document.querySelector('.brain_img');
const entenda = document.querySelector('.box_entenda');
const comoFunciona = document.querySelector('.box_comoFunciona');
const div_sua = document.querySelector('.box_sua');
const dopamina = document.querySelector('.box_dopamina');
const buttonLogin = document.getElementById('button_login');

let controleAbrirFechar = true;

function aparecerDivs() {

    if (controleAbrirFechar) {
        controleAbrirFechar = false;

        entenda.style.display = 'flex';
        comoFunciona.style.display = 'flex';
        div_sua.style.display = 'flex';
        dopamina.style.display = 'flex';
        setTimeout(animacaoDivsAbrir, 1);

        desacelerarPulse_Cerebro();
    } else {
        controleAbrirFechar = true;
        animacaoDivsFechar();

        setTimeout(function () {
            entenda.style.display = 'none';
            comoFunciona.style.display = 'none';
            div_sua.style.display = 'none';
            dopamina.style.display = 'none';
        }, 550);

        acelerarPulse_Cerebro();
    }
}

function animacaoDivsAbrir() {
    entenda.style.transform = 'translateX(-12rem)';
    comoFunciona.style.transform = 'translateX(12rem)';
    div_sua.style.transform = 'translateX(-12rem)';
    dopamina.style.transform = 'translateX(12rem)';
    buttonLogin.style.transform = 'translateX(-1%)';

}

function animacaoDivsFechar() {
    entenda.style.transform = 'translateX(12rem)';
    comoFunciona.style.transform = 'translateX(-12rem)';
    div_sua.style.transform = 'translateX(12rem)';
    dopamina.style.transform = 'translateX(-12rem)';
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
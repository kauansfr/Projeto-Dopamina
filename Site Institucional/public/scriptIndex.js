    const dopamina = document.querySelector('.box_dopamina');
    const atividadeFisica = document.querySelector('.box_atividadeFisica');
    const rotina = document.querySelector('.box_controleRotina');
    const sobreMim = document.querySelector('.box_sobreMim');

function aparecerDopamina() {
    dopamina.style.display = 'flex';
    atividadeFisica.style.display = 'flex';
    rotina.style.display = 'flex';
    sobreMim.style.display = 'flex';
    setTimeout(animacaoDopamina, 1);
}

function animacaoDopamina() {
    dopamina.style.transform = 'translateX(-12rem)';
    atividadeFisica.style.transform = 'translateX(12rem)';
    rotina.style.transform = 'translateX(-12rem)';
    sobreMim.style.transform = 'translateX(12rem)';
}
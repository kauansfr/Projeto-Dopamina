function aparecerDopamina() {
    const dopamina = document.querySelector('.box_dopamina');

    dopamina.style.display = 'flex';
    setTimeout(animacaoDopamina, 1);
}

function animacaoDopamina() {
    const dopamina = document.querySelector('.box_dopamina');
    dopamina.style.transform = 'translateX(-12rem)';
}
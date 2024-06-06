var special_words = ['DOPAMINA', 'RECEPTOR', 'GUIADO A OBJETIVO', 'MOTIVAÇÃO', '1000', 'SINAPSE QUÍMICA', 'HOMEOSTASE', 'SEXO', 'APERTAR O BOTÃO', 'NEUROTRANSMISSOR'];

var questions_list = [
    'Neurotransmissor erroneamente confundido com prazer.',
    'Nome da proteína receptora que recebe a mensagem do neurotransmissor.',
    'Nome do comportamento que roedores com sistema dopaminérgico danificado não conseguem realizar.',
    'Principal sensação causada pela liberação de dopamina no núcleo da célula neural',
    'Quantidade de dopamina liberada durante o consumo de anfetaminas (apenas números)',
    'Nome científico da comunicação entre neurônios.',
    'Estado de equilíbrio que o corpo busca após uso de drogas',
    'Atividade que aumenta os níveis de dopamina em 100%',
    'Esforço que os macacos precisavam fazer 10 vezes para receber suco de maçã.',
    'Responsável por entregar mensagens aos neurônios.'
];

var filledCell = [
    2, 21, 40, 59, 78, 97, 116, 135,
    136, 137, 138, 139, 140, 141, 142, 143,
    210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
    308, 289, 270, 251, 232, 213, 194, 175, 156,
    134, 153, 172, 191,
    96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    245, 226, 207, 188, 169, 150, 131, 112, 93, 74,
    93, 92, 91, 90,
    300, 299, 298, 297, 296, 295, 294, 293, 292, 291, 290, 289, 288, 287, 286,
    75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61
];

var firstIndex = [2, 136, 210, 308, 134, 96, 245, 93, 300, 75];

var word = {

    word1: {
        letter: special_words[0].split(''),
        position: [2, 21, 40, 59, 78, 97, 116, 135],
        write: function () {

            for (i in word.word1.letter) {
                var findCell = document.querySelector(`#cell_${word.word1.position[i]}`);

                findCell.innerHTML = word.word1.letter[i];
                console.log(word.word1.letter[i]);
            }
            cell_2.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">1</span>D';
        }
    },
    word2: {
        letter: special_words[1].split(''),
        position: [136, 137, 138, 139, 140, 141, 142, 143],
        write: function () {
            for (i in word.word2.letter) {
                var findCell = document.querySelector(`#cell_${word.word2.position[i]}`);

                findCell.innerHTML = word.word2.letter[i];
                console.log(word.word2.letter[i]);
            }
            cell_136.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">2</span>R';

        }
    },
    word3: {
        letter: special_words[2].split(''),
        position: [210, 211, 212, 213, 214,
            215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226],
        write: function () {
            for (i in word.word3.letter) {
                var findCell = document.querySelector(`#cell_${word.word3.position[i]}`);

                findCell.innerHTML = word.word3.letter[i];
                console.log(word.word3.letter[i]);
            }
            cell_210.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">3</span>G';
        }
    },
    word4: {
        letter: special_words[3].split(''),
        position: [308, 289, 270, 251, 232, 213, 194, 175, 156],
        write: function () {
            for (i in word.word4.letter) {
                var findCell = document.querySelector(`#cell_${word.word4.position[i]}`);

                findCell.innerHTML = word.word4.letter[i];
                console.log(word.word4.letter[i]);
            }
            cell_308.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">4</span>M';
        }
    },
    word5: {
        letter: special_words[4].split(''),
        position: [134, 153, 172, 191],
        write: function () {
            for (i in word.word5.letter) {
                var findCell = document.querySelector(`#cell_${word.word5.position[i]}`);

                findCell.innerHTML = word.word5.letter[i];
                console.log(word.word5.letter[i]);
            }
            cell_134.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">5</span>1';
        }
    },
    word6: {
        letter: special_words[5].split(''),
        position: [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
        write: function () {
            for (i in word.word6.letter) {
                var findCell = document.querySelector(`#cell_${word.word6.position[i]}`);

                findCell.innerHTML = word.word6.letter[i];
                console.log(word.word6.letter[i]);
            }
            cell_96.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">6</span>S';
        }
    },
    word7: {
        letter: special_words[6].split(''),
        position: [245, 226, 207, 188, 169, 150, 131, 112, 93, 74],
        write: function () {
            for (i in word.word7.letter) {
                var findCell = document.querySelector(`#cell_${word.word7.position[i]}`);

                findCell.innerHTML = word.word7.letter[i];
                console.log(word.word7.letter[i]);
            }
            cell_245.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">7</span>H';
        }
    },
    word8: {
        letter: special_words[7].split(''),
        position: [93, 92, 91, 90],
        write: function () {
            for (i in word.word8.letter) {
                var findCell = document.querySelector(`#cell_${word.word8.position[i]}`);

                findCell.innerHTML = word.word8.letter[i];
                console.log(word.word8.letter[i]);
            }
            cell_93.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">8</span>S';
        }
    },
    word9: {
        letter: special_words[8].split(''),
        position: [300, 299, 298, 297, 296, 295, 294, 293, 292, 291, 290, 289, 288, 287, 286],
        write: function () {
            for (i in word.word9.letter) {
                var findCell = document.querySelector(`#cell_${word.word9.position[i]}`);

                findCell.innerHTML = word.word9.letter[i];
                console.log(word.word9.letter[i]);
            }
            cell_300.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">9</span>A';
        }
    },
    word10: {
        letter: special_words[9].split(''),
        position: [75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61],
        write: function () {
            for (i in word.word10.letter) {
                var findCell = document.querySelector(`#cell_${word.word10.position[i]}`);

                findCell.innerHTML = word.word10.letter[i];
                console.log(word.word10.letter[i]);
            }
            cell_75.innerHTML = '<span style="color: #000000; font-size:12px; font-weight: bold;">10</span>N';
        }
    }
};

var widthTable = 19;
var heightTable = 17;


var cont_correctAnswer = 0;

function start() {
    cont_correctAnswer = 0;
    bt_start.style.display = 'none';
    bt_destroyGame.style.display = 'block';
    id_questions.style.display = 'block';
    div_information.innerHTML = '';
    renderGrid();
    gameSequence();
}

function destroyGrid() {
    bt_start.style.display = 'block';
    bt_destroyGame.style.display = 'none';
    id_questions.style.display = 'none';

    document.querySelector('#div_canvasCruzada').innerHTML = '';
    pontuation();
}

function gameSequence() {
    div_questionText.innerHTML = `<b>${cont_correctAnswer + 1}.</b> ${questions_list[cont_correctAnswer]}`;

    if (cont_correctAnswer == 1) {
        word.word1.write();
    }
    else if (cont_correctAnswer == 2) {
        word.word2.write();
    }
    else if (cont_correctAnswer == 3) {
        word.word3.write();
    }
    else if (cont_correctAnswer == 4) {
        word.word4.write();
    }
    else if (cont_correctAnswer == 5) {
        word.word5.write();
    }
    else if (cont_correctAnswer == 6) {
        word.word6.write();
    }
    else if (cont_correctAnswer == 7) {
        word.word7.write();
    }
    else if (cont_correctAnswer == 8) {
        word.word8.write();
    }
    else if (cont_correctAnswer == 9) {
        word.word9.write();
    }
    else if (cont_correctAnswer == 10) {
        word.word10.write();
    }
}


function pontuation() {
    div_information.style.display = 'block';

    div_information.innerHTML = '<h1 style="text-align: center; padding-top: 150px">Parabéns!!!</h1><br><br><p style="text-align: center; text-decoration-line: underline; line-height: 10px;">Você finalizou o jogo</p><br><br>';
}

function renderGrid() {
    var tableGame = '<table id="gridGame" cellspacing=0 cellpadding=0>';

    // &nbsp its used to set null value to a cell
    var cellContent_tableGame = '&nbsp';
    var cell = 0;

    for (var row = 1;
        row <= heightTable;
        row++) {

        tableGame += `<tr id="row_${row}">`;

        for (var column = 1; column <= widthTable; column++, cell++) {
            tableGame += `<td class="deadCell" id="cell_${cell}">` + cellContent_tableGame + '</td>';

        }
        tableGame += '</tr>';

    }
    tableGame += '</table>';

    document.querySelector('#div_canvasCruzada').innerHTML = tableGame;

    paintCells();
}



function paintCells() {

    for (item in filledCell) {
        var paintCell = document.getElementById(`cell_${filledCell[item]}`);
        paintCell.removeAttribute('deadCell');
        paintCell.setAttribute('class', 'availableCell');
    }

    for (var initial = 0;
        initial < firstIndex.length;
        initial++) {
        var paintIndex_cell = document.getElementById(`cell_${firstIndex[initial]}`);

        paintIndex_cell.innerHTML = `<span style="color: #000000; font-size:12px; font-weight: bold;">${initial + 1}</span>`;
    }
}

function verify() {
    var answer = input_answer.value;

    if (answer != '') {
        answer = answer.toUpperCase();

        if (answer == special_words[cont_correctAnswer]) {
            id_verifiedAnswer.classList.add('correctAnswer');
            id_verifiedAnswer.innerHTML = '<br text-align: center;>Resposta Correta!';

            if (cont_correctAnswer < 9) {
                cont_correctAnswer++;
            } else {
                setTimeout(function () {
                    destroyGrid();
                }, 1500);
            }
        }
        else {
            id_verifiedAnswer.classList.add('wrongAnswer');
            id_verifiedAnswer.innerHTML = '<br text-align: center;>Resposta Incorreta, tente novamente';
        }
        setTimeout(function () {
            id_verifiedAnswer.style.display = 'block';
        }, 500);

        setTimeout(function () {
            id_verifiedAnswer.style.display = 'none';
        }, 1400);

        input_answer.value = '';
        gameSequence();
    }
    else {
        alert('Por Favor, digite uma resposta na caixa de texto');
    }
}

function acessarIndex() {
    window.location.href = 'index.html';
}

function acessarDashboard() {
    window.location.href = 'dashboardDopa.html';
}
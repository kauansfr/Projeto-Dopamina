var special_words = ['DOPAMINA', 'RECEPTOR', 'GUIADO A OBJETIVO', 'MOTIVAÇÃO', '1000', 'SINAPSE QUÍMICA', 'HOMEOSTASE', 'SEXO', 'APERTAR O BOTÃO', 'MEMBRANA PLASMÁTICA', 'Adress Bus', 'Data Bus', 'I5', 'I7', 'Dual Core', 'Quad Core'];

var questions_list = [
    'Neurotransmissor erroneamente confundido com prazer.',
    'Nome da proteína receptora que recebe a mensagem do neurotransmissor.',
    'Nome do comportamento que roedores com sistema dopaminérgico danificado não conseguem realizar.',
    'Principal sensação causada pela liberação de dopamina no núcleo da célula neural',
    'Quantidade de dopamina liberada durante o consumo de anfetaminas (apenas números)',
    'Nome científico da comunicação entre neurônios.',
    'Estado de equilíbrio que o corpo busca após uso de drogas',
    'Exemplo de uma atividade que aumenta os níveis de dopamina em 100%',
    'Esforço que os macacos precisavam fazer 10 vezes para receber suco de maçã.',
    'Área da célula neural onde a mensagem do neurotransmissor é entregue.',
    'Conjunto de linhas de comunicação usado pelo processador ou outro controlador para especificar um endereço na memória ou em outro dispositivo periférico. Esse endereço indica onde os dados devem ser lidos ou escritos.',
    'Transfere os dados para o processador, memória e dispositivos endereçados pelos Address Bus.',
    'Processador feito pela Intel, usualmente, com 4 a 6 núcleos, clock moderado de 2.9GHz e 3.8GHz, 6MB a 12MB de cache',
    'Processador feito pela Intel, que varia de 4 a 8 núcleos físicos, clock mais avançado, entre 3.0GHz e 3.8GHz e 8MB e 16MB de cache.',
    'Processadores com dois núcleos e apresentam um desempenho de processamento um pouco mais demorado',
    'Processadores com quatro núcleos e apresentam um desempenho  mais ágil em relação ao de dois núcleos.'
];

var filledCell = [2, 21, 40, 59, 78, 97, 116, 135, 135, 136, 137, 138, 139, 140, 141, 142, 210, 211, 212, 213, 214,
    215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 185, 203, 221, 239, 257, 275, 59, 60, 61, 272, 290, 308, 236,
    254, 272, 290, 308, 116, 134, 152, 170, 188, 27, 45, 63, 81, 99, 117,
    135, 153, 171, 189, 207, 225, 243, 261, 279, 297, 203, 204, 205, 312,
    313, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 187, 20, 223,
    241, 259, 277, 295, 313, 117, 118, 113, 114, 37, 38, 39, 41, 42,
    43, 44, 45, 3, 21, 39, 57, 75, 93, 111, 129, 147];

var firstIndex = [2, 136, 210, 59, 272, 236, 116, 27, 203, 312, 270, 187, 117, 113, 37, 3];

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
            cell_2.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">1</span>C';
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
            cell_136.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">2</span>U';

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
            cell_210.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">3_4</span>R';
            cell_113.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">14</span>i';
        }
    },
    word4: {
        letter: special_words[3].split(''),
        position: [59, 60, 61],
        write: function () {
            for (i in word.word4.letter) {
                var findCell = document.querySelector(`#cell_${word.word4.position[i]}`);

                findCell.innerHTML = word.word4.letter[i];
                console.log(word.word4.letter[i]);
            }
            cell_59.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">3_4</span>R';
        }
    },
    word5: {
        letter: special_words[4].split(''),
        position: [272, 290, 308],
        write: function () {
            for (i in word.word5.letter) {
                var findCell = document.querySelector(`#cell_${word.word5.position[i]}`);

                findCell.innerHTML = word.word5.letter[i];
                console.log(word.word5.letter[i]);
            }
            cell_272.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">5</span>R';
        }
    },
    word6: {
        letter: special_words[5].split(''),
        position: [236, 254, 272, 290, 308],
        write: function () {
            for (i in word.word6.letter) {
                var findCell = document.querySelector(`#cell_${word.word6.position[i]}`);

                findCell.innerHTML = word.word6.letter[i];
                console.log(word.word6.letter[i]);
            }
            cell_236.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">6</span>E';
        }
    },
    word7: {
        letter: special_words[6].split(''),
        position: [116, 134, 152, 170, 188],
        write: function () {
            for (i in word.word7.letter) {
                var findCell = document.querySelector(`#cell_${word.word7.position[i]}`);

                findCell.innerHTML = word.word7.letter[i];
                console.log(word.word7.letter[i]);
            }
            cell_116.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">7</span>F';
        }
    },
    word8: {
        letter: special_words[7].split(''),
        position: [27, 45, 63, 81, 99, 117, 135, 153, 171, 189, 207, 225, 243, 261, 279, 297],
        write: function () {
            for (i in word.word8.letter) {
                var findCell = document.querySelector(`#cell_${word.word8.position[i]}`);

                findCell.innerHTML = word.word8.letter[i];
                console.log(word.word8.letter[i]);
            }
            cell_27.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">8</span>M';
            cell_117.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">13</span>i';
            cell_153.innerHTML = '-';
            cell_207.innerHTML = '-';

        }
    },
    word9: {
        letter: special_words[8].split(''),
        position: [203, 204, 205, 312, 313],
        write: function () {
            for (i in word.word9.letter) {
                var findCell = document.querySelector(`#cell_${word.word9.position[i]}`);

                findCell.innerHTML = word.word9.letter[i];
                console.log(word.word9.letter[i]);
            }
            cell_203.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">9</span>D';
        }
    },
    word10: {
        letter: special_words[9].split(''),
        position: [312, 313],
        write: function () {
            for (i in word.word10.letter) {
                var findCell = document.querySelector(`#cell_${word.word10.position[i]}`);

                findCell.innerHTML = word.word10.letter[i];
                console.log(word.word10.letter[i]);
            }
            cell_312.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">10</span>C';
        }
    },
    word11: {
        letter: special_words[10].split(''),
        position: [270, 271, 272, 273, 274, 275, 276, 277, 278, 279],
        write: function () {
            for (i in word.word11.letter) {
                var findCell = document.querySelector(`#cell_${word.word11.position[i]}`);

                findCell.innerHTML = word.word11.letter[i];
                console.log(word.word11.letter[i]);
            }
            cell_270.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">11</span>A';
            cell_276.innerHTML = '-';
        }
    },
    word12: {
        letter: special_words[11].split(''),
        position: [187, 205, 223, 241, 259, 277, 295, 313, 117, 118],
        write: function () {
            for (i in word.word12.letter) {
                var findCell = document.querySelector(`#cell_${word.word12.position[i]}`);

                findCell.innerHTML = word.word12.letter[i];
                console.log(word.word12.letter[i]);
            }
            cell_187.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">12</span>D';
            cell_259.innerHTML = '-';
        }
    },
    word13: {
        letter: special_words[12].split(''),
        position: [117, 118],
        write: function () {
            for (i in word.word13.letter) {
                var findCell = document.querySelector(`#cell_${word.word13.position[i]}`);

                findCell.innerHTML = word.word13.letter[i];
                console.log(word.word13.letter[i]);
            }
            cell_117.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">13</span>I';
        }
    },
    word14: {
        letter: special_words[13].split(''),
        position: [113, 114],
        write: function () {
            for (i in word.word14.letter) {
                var findCell = document.querySelector(`#cell_${word.word14.position[i]}`);

                findCell.innerHTML = word.word14.letter[i];
                console.log(word.word14.letter[i]);
            }
            cell_113.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">14</span>I';
        }
    },
    word15: {
        letter: special_words[14].split(''),
        position: [37, 38, 39, 40, 41, 42, 43, 44, 45],
        write: function () {
            for (i in word.word15.letter) {
                var findCell = document.querySelector(`#cell_${word.word15.position[i]}`);

                findCell.innerHTML = word.word15.letter[i];
                console.log(word.word15.letter[i]);
            }
            cell_37.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">15</span>D';
            cell_41.innerHTML = '-';
        }
    },
    word16: {
        letter: special_words[15].split(''),
        position: [3, 21, 39, 57, 75, 93, 111, 129, 147],
        write: function () {
            for (i in word.word16.letter) {
                var findCell = document.querySelector(`#cell_${word.word16.position[i]}`);

                findCell.innerHTML = word.word16.letter[i];
                console.log(word.word16.letter[i]);
            }
            cell_3.innerHTML = '<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">16</span>Q';
            cell_75.innerHTML = '-';
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
    else if (cont_correctAnswer == 11) {
        word.word11.write();
    }
    else if (cont_correctAnswer == 12) {
        word.word12.write();
    }
    else if (cont_correctAnswer == 13) {
        word.word13.write();
    }
    else if (cont_correctAnswer == 14) {
        word.word14.write();
    }
    else if (cont_correctAnswer == 15) {
        word.word15.write();
    }
    else if (cont_correctAnswer == 16) {
        word.word16.write();

        setTimeout(function () {
            destroyGrid();
        }, 3000);
    }


}


function pontuation() {
    div_information.style.display = 'block';

    div_information.innerHTML = '<h1 style="text-align: center; padding-top: 150px">Parabéns!!!</h1><br><br><p style="text-align: center; text-decoration-line: underline;">Você finalizou o jogo</p><br><br>';
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

        paintIndex_cell.innerHTML = `<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">${initial + 1}</span>`;

        if (initial == 2 || initial == 3) {
            paintIndex_cell.innerHTML = `<span style="color: #FFFFFF; font-size:12px; font-weight: bold;">3_4</span>`;
        }
    }
}

function verify() {
    var answer = input_answer.value;

    if (answer != '') {
        answer = answer.toUpperCase();

        if (answer == special_words[cont_correctAnswer]) {
            id_verifiedAnswer.classList.add('correctAnswer');
            id_verifiedAnswer.innerHTML = '<br>Resposta Correta!';
            cont_correctAnswer++;
        }
        else {
            id_verifiedAnswer.classList.add('wrongAnswer');
            id_verifiedAnswer.innerHTML = '<br>Resposta Incorreta, tente novamente';
        }
        setTimeout(function () {
            id_verifiedAnswer.style.display = 'block';
        }, 500);

        setTimeout(function () {
            id_verifiedAnswer.style.display = 'none';
        }, 3000);

        input_answer.value = '';
        gameSequence();
    }
    else {
        alert('Por Favor, digite uma resposta na caixa de texto');
    }
}
let winner = false;
let turn = 0;
function playerChoice (player, choice, turn) {
    return {player, choice, turn};
}
const playerOne = playerChoice('player 1', 'X', true);
const playerTwo = playerChoice('player 2', 'O', false);
let array = ['','','','','','','','',''];
const winning = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
const mainPara = document.getElementById('mainPara');
const reStart = document.querySelector('.button');
const box = document.querySelectorAll('.box');

mainPara.innerText = `Player X's Turn`;

function gameBoard () {
    reStart.addEventListener('click', () => {
        reset();
    });
    
    box.forEach(element => {
        element.textContent = '';
        element.addEventListener('click', () => {
    
            if (playerOne.turn === true && array[element.id] == '') {
                array[element.id] = playerOne.choice;
                element.textContent = playerOne.choice;
                mainPara.innerText = `Player O's Turn`;
                playerOne.turn = false;
                playerTwo.turn = true;
                winingChoice();
            }
    
            else if (playerTwo.turn === true && array[element.id] == '') {
                array[element.id] = playerTwo.choice;
                element.textContent = playerTwo.choice;
                mainPara.innerText = `Player X's Turn`;
                playerOne.turn = true;
                playerTwo.turn = false;
                winingChoice();
            }
            else {
                console.log('Not working');
            }
        }, {once: true});
    });
}


function winingChoice () {
    turn ++;
    winning.forEach (element => {
        if ( (array[element[0]] === array[element[1]]) && (array[element[1]] === array[element[2]]) && (array[element[0]] !== '') ) {
            mainPara.innerText = `Player ${array[element[0]]} Win The Game`;
            winner = true;
            box.forEach (e => {
                if (winner === true) {
                    e.disabled = true;
                }
            });
        }
    });
    if (winner === false && turn === 9) {
        mainPara.innerText = "It's Tai! Click Reset to play one more round"
    }
}

function reset () {
    console.log('fgujhsdf');
    array = ['','','','','','','','',''];
    playerOne.turn = true;
    playerTwo.turn = false;
    winner = false;
    turn = 0;
    mainPara.innerText = `Player X's Turn`;
    box.forEach (e => {
        if (winner === false) {
            e.disabled = false;
        }
    });
    gameBoard();
}

gameBoard();
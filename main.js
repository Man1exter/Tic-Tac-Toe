const $button = document.querySelector(".restart");
const $infoP = document.querySelector('.info');

let round = 1;
let playerX = 'X';

let combinationsEmpty = ["","","","","","","","",""];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const pickItem = (e) => {
if(round % 2 === 0 ){

}


}


document.querySelectorAll('.panel').forEach(panel => panel.addEventListener("click", showIcon));
$button.addEventListener("click", restartGame);








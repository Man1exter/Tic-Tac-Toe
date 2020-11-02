
let round = 1;
let playerX = 'fa-circle';
let playerY = 'far fa-times-circle';

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


const showIcon = () => {


};

const restartGame = () => {
    combinationsEmpty = ["","","","","","","","",""];
    playerX = 'fa-circle';  // circle always start the game 
    document.querySelectorAll('.panel').forEach(panel => panel.innerHTML = "");
};

document.querySelectorAll('.panel').forEach(panel => panel.addEventListener("click", showIcon));
document.querySelector('.restart').addEventListener('click', restartGame);








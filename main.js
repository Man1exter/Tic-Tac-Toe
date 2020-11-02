
let round = 1;
let playerX = 'fa-circle';

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

function mainPanelPlay(clickPanel, clickPanelEle) {

    combinationsEmpty[clickPanelEle] = playerX;
    clickPanel.innerHTML = playerX;

};

function changePlayer() {
    playerX = playerX === "fa-circle" ? "far fa-times-circle" : "fa-circle";
};

const showIcon = (e) => {


};

const restartGame = () => {
    combinationsEmpty = ["","","","","","","","",""];
    playerX = 'fa-circle';  // circle always start the game 
    document.querySelectorAll('.panel').forEach(panel => panel.innerHTML = "");
};

document.querySelectorAll('.panel').forEach(panel => panel.addEventListener("click", showIcon));
document.querySelector('.restart').addEventListener('click', restartGame);








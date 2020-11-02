
let round = 1;
let playerX = 'fa-circle';
let gameActive = true;

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
    const clickPanel = e.target;
    const clickPanelEle = parseInt(clickPanel.getAttribute('data-panel'));

    if (combinationsEmpty[clickPanel] !== "" || !gameActive) {
        return;
    }

    mainPanelPlay(clickPanel, clickPanelEle);
    resultClicker();

};


function resultClicker() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];

        let a = combinationsEmpty[winCondition[0]];
        let b = combinationsEmpty[winCondition[1]];
        let c = combinationsEmpty[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    };

    if (roundWon) {
        gameActive = false;
        return;
    };

    let roundDraw = !combinationsEmpty.includes("");
    if (roundDraw) {
        gameActive = false;
        return;
    };

    changePlayer();
};



const restartGame = () => {
    combinationsEmpty = ["","","","","","","","",""];
    playerX = 'fa-circle';  // circle always start the game 
    document.querySelectorAll('.panel').forEach(panel => panel.innerHTML = "");
};


document.querySelectorAll('.panel').forEach(panel => panel.addEventListener("click", showIcon));
document.querySelector('.restart').addEventListener('click', restartGame);








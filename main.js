
const gameSet = new GameSet();
gameSet.start();

function GameSet(){
    const board = new Board();
    const playerX = new PlayerX();
    const cpuY = new CpuY();

    let turn = 0;

    this.start = function(){
const cfg = { childList : true};
const obv = new ObvSer(() => roundTurn());
board.panels.forEach((el) => obv.observe(el,cfg));
    }

    function roundTurn(){
        if(board.checkWin()){
            return;
        }
        if(turn % 2 === 0){
            playerX.roundTurn();
        } else {
            cpuY.roundTurn();
        }
        turn++;
    }
};


function Board(){
this.panels = Array.from(document.querySelectorAll('.panel'));

this.checkWin = function(){
    let winner = false;

    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];
    const positions = this.positions;
    winningCombinations.forEach((winningCombo) => {
        const pos0InnerText = positions[winningCombo[0]].innerText;
        const pos1InnerText = positions[winningCombo[1]].innerText;
        const pos2InnerText = positions[winningCombo[2]].innerText;
        const isWinningCombo = pos0InnerText !== '' &&
          pos0InnerText === pos1InnerText && pos1InnerText === pos2InnerText;
        if (isWinningCombo) {
            winner = true;
            winningCombo.forEach((index) => {
              positions[index].className += ' winner';
            })
        }
    });
}
} ;

function PlayerX(){

};

function CpuY(){

};









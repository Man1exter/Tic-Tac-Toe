
const playerX = '<i class="far fa-circle"></i>';
const playerY= '<i class="far fa-times-circle"></i>';
let round = 1;

const board = [
    [" " ," " ," "],
    [" " ," " ," "],
    [" " ," " ," "]
]

const aWays = [
    ["0,1,2"] ,["3,4,5"],["6,7,8"],
    ["0,3,6"] ,["1,4,7"] ,["2,5,8"],
    ["0,4,8"] ,["2,4,6"]
]

const panels = [...document.querySelectorAll('.panel')];

const createClick = (event) => {
    const {row , column} = event.target.dataset;
    const turn = round % 2 === 0 ? playerX : playerY;

    if(board[row][column] !== '') return;
    event.target.classList.add(turn);
    board[row][column] = turn;
    round++;

       checkResult()
}

 function checkResult(){
     let winner = null;

     const resultSum = board.reduce((total,row) => total.concat(row));

     let moves = {
        'fa-circle-o' : [],
        'fa-times' : []
     }

     resultSum.forEach((field,index) => moves[field] ? moves[field].push(index) : null);

     aWays.forEach(aWay => {
         if(aWay.every(index => moves[playerX].indexOf(index) > -1)){
              winner = 'Winner : playerX';
         } if(aWay.every(index => moves[playerY].indexOf(index) > -1)){
              winner = 'Winner : playerY';
         }
     })
     return winner;
 }
 panels.forEach(panel => panel.addEventListener("click", createClick));









const PlayerX = "fa-circle";
const PlayerY = "fa-times-circle";
let round = 1;

const board = [
    [" " ," " ," "],
    [" " ," " ," "],
    [" " ," " ," "]
]

const aWays = [
    [0,1,2] ,[3,4,5],[6,7,8],
    [0,3,6] ,[1,4,7] ,[2,5,8],
    [0,4,8] ,[2,4,6]
]

const panels = [...document.querySelectorAll('.panel')];

const createClick = (event) => {
    const {row , column} = event.target.dataset;
    const turn = round % 2 === 0 ? PlayerX : PlayerY;

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
        'far fa-circle' : [],
        'far fa-times-circle' : []
     }

     resultSum.forEach((field,index) => moves[field] ? moves[field].push(index) : null);

     aWays.forEach(aWay => {
         if(aWay.every(index => moves[PlayerX].indexOf(index) > -1)){
              winner = 'Winner : PlayerX';
         } if(aWay.every(index => moves[PlayerY].indexOf(index) > -1)){
              winner = 'Winner : PlayerY';
         }
     })
     return winner;
 }
 panels.forEach(panel => panel.addEventListener("click", createClick));
 








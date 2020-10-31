
const player = 'fa-circle';
const cpu = 'fa-times-circle';
let round = 1;

const board = [
    [" " ," " ," "],
    [" " ," " ," "],
    [" " ," " ," "]
]

const aWays = [
    [" 0 " ," 1 " ," 2 "],
    [" 3 " ," 4 " ," 5 "],
    [" 6 " ," 7 " ," 8 "]
]

const panels = [...document.querySelectorAll('.panel')];

panels.forEach(panel => panel.addEventListener("click", createClick));

const createClick = (event) => {
    const turn = round % 2 === 0 ? player : cpu;
    const {row , column} = event.target.dataset;
    board[row][column] = turn;

    if(board[row][column] !== '') return;

       event.target.classList.add(turn);

       checkResult()
}

 function checkResult(){
     let winner = null;

     const resultSum = board.reduce((total,row) => total.concat(row));

     let moves = {
        'fa-circle' : [],
        'fa-times-circle' : []
     }

     resultSum.forEach((field,index) => moves[field] ? moves[field].push(index) : null)
 }








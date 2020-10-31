
const player = 'far fa-circle';
const cpu = 'far fa-times-circle';
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
 }








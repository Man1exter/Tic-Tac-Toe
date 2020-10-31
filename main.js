
const player = 'far fa-circle';
const cpu = 'far fa-times-circle';
let round = 1;

const board = [
    [" " ," " ," "],
    [" " ," " ," "],
    [" " ," " ," "]
]

const panels = [...document.querySelectorAll('.panel')];

panels.forEach(panel => panel.addEventListener("click", createClick));

const createClick = (event) => {
    const turn = round % 2 === 0 ? player : cpu;
    const {row , column} = event.target.dataset;
       event.target.classList.add(turn);
}
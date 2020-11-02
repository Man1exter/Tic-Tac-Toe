

const $panels = document.querySelectorAll('.panel');
const $panels = [...('.panel')];
let round = 1;


const pick = (event) => {

const itemX = document.createElement('<i class="far fa-circle"></i>');
const itemY = document.createElement('<i class="far fa-times-circle"></i>');

if(event.target.value !== ' '){

}


$panels.appendChild(itemX);
$panels.appendChild(itemY);
};





$panels.addEventListener('click', pick);








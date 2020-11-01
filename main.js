const $panels = document.querySelectorAll('.panel');


const pick = (event) => {

const itemX = document.createElement('<i class="far fa-circle"></i>');
const itemY = document.createElement('<i class="far fa-times-circle"></i>');



panels.appendChild(itemX);
panels.appendChild(itemY);
};





$panels.addEventListener('click', pick);








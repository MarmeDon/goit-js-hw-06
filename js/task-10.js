function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const createBtnEl = controlsEl.querySelector('[data-create]');
const destroyBtnEl = controlsEl.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  let elements = '';
  for (let i = 0; i < amount; i += 1){
    elements += `<div style="width:${30 + 10 * i}px; height:${30 + 10 * i}px; background-color:${getRandomHexColor()};" ></div>`;
  }
  boxesEl.innerHTML = elements;
}

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
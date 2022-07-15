const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('span#text')

inputEl.addEventListener('input', onSliderChange);

function onSliderChange({ target: { value } }) {
   spanEl.style.fontSize = +value + 'px';
}

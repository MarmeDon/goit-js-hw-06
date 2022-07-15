const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


inputEl.addEventListener('input', onInputChange);



function onInputChange({ target: { value } }) {
   outputEl.textContent = value;
   if (value.trim() === "") {
      outputEl.textContent = 'Anonymous';
   }
}
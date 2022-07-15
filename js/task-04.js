const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementtBtnEl = document.querySelector('[data-action="decrement"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

incrementBtnEl.addEventListener('click', onClickIncrement);

function onClickIncrement() {
   counterValue += 1;
   counterValueEl.textContent = counterValue;
}

decrementtBtnEl.addEventListener('click', onClickDecrement);

function onClickDecrement() {
   counterValue -= 1;
   return counterValueEl.textContent = counterValue;
}
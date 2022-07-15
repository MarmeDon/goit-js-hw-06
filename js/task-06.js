const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur({ target: { value, dataset, classList } }) {
   if (value.trim().length === +dataset.length) {
      if (classList.contains('invalid')) {
         classList.remove('invalid')
      }
      return classList.add('valid');
   }
   classList.add('invalid');
}
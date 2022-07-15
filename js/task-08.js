const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('.login-form');
const passwordInputEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
   event.preventDefault();
   const {elements: { email, password } } = event.target;
   if (email.value === '' || password.value === '') {
      return alert('все поля должны быть заполнены');
   }
   const obj = {};
   obj.email = email.value;
   obj.password = password.value;
   console.log(obj)
   event.target.reset();
}

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(el => {
  const liEl = document.createElement('li');
  liEl.textContent = el;
  liEl.classList.add('item');
  return liEl;
})

document.querySelector('#ingredients').append(...ingredientsList);
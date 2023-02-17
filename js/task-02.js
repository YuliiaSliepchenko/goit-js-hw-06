const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientList = document.querySelector('#ingredients');

const listElements = [];

for (const ingredient of ingredients) {

  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.innerHtml = ingredient;

  listElements.push(listEl);

}
ingridientList.append(...listElements);
console.log(ingridientList);








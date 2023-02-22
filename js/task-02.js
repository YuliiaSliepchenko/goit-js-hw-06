const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) =>
 {  const listItems = document.createElement("li"); 
 listItems.classList.add("item"); 
 listItems.textContent = ingredient;

  return listItems;
});

console.log(ingredientsList);

listElement.append(...ingredientsList);




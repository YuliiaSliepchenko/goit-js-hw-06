const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterElem = document.querySelector('#value');
let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue -=1;
    counterElem.textContent = counterValue;
});

increment.addEventListener('click', () => {
  counterValue += 1;
  counterElem.textContent  = counterValue;
});
















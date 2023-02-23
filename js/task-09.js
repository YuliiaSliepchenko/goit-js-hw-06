// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color
//  і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  const bodyColor = document.querySelector("body");
  const bodyChange = document.querySelector('.change-color');
  const spanEl = document.querySelector('.color');


const changeColor = () => {
  spanEl.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
};

bodyChange.addEventListener("click", changeColor);





// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку 
//  Створити, після чого рендериться колекція. 
//  Натисненням на кнопку Очистити, колекція елементів очищається.
// // Створи функцію createBoxes(amount), 
// яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх
//  у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим
//  від попереднього на 10px.
// // Всі елементи повинні мати випадковий 
// колір фону у форматі HEX. Використовуй готову функцію
//  getRandomHexColor для отримання кольору.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy"),
  boxContainer: document.getElementById("boxes"),
}
const createBoxes = amount => {
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i += 1){
    refs.boxContainer.insertAdjacentHTML("afterbegin", 
    `<div data-box></div>`);
    const containers = document.querySelector("[data-box]");
    containers.style.cssText = `width: ${width += 10}px ;
     height: ${height += 10}px;
      background-color: ${getRandomHexColor()}`;
  };
    refs.boxContainer.style.cssText = 
    'display:flex; justify-content:flex-start;';
  };
  const handler = (event)=> {
    createBoxes(refs.input.value)
      };
    refs.createBtn.addEventListener("click", handler);
const destroyBoxes = () => refs.boxContainer.innerHTML = '';
refs.createBtn.addEventListener("click", handler);
refs.destroyBtn.addEventListener("click", destroyBoxes);
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

const controlEl = document.querySelector("#controls")
const createEl = document.querySelector("[data-create]")
const boxesEl = document.querySelector("#boxes")
const destroyEl = document.querySelector("[data-destroy]")

function createBoxes(amount) {
  let markup = ""
  for (let i = 0; i < amount; i += 1) {
    const size = 30+i*10
    markup += `<div style =
    "width: ${size}px; height:${size}px;
     background-color: ${getRandomHexColor()}"></div>`
  }
  boxesEl.style.cssText = 'justify-content:flex-start;';
  boxesEl.innerHTML = ""
  boxesEl.insertAdjacentHTML("beforeend", markup)
  
}

createEl.addEventListener("click", handleCreate)
function handleCreate() {
  const amount = Number(controlEl.firstElementChild.value)
  if (amount) {
    createBoxes(amount)
  }
console.log("test");
}
destroyEl.addEventListener("click", handleDestroy)
function handleDestroy() {

 boxesEl.innerHTML = "";
 let getValue= document.getElementsByTagName("input");
 console.log(getValue);
 
     if (getValue[0].value !="") {
      getValue[0].value = "";

    }
}





















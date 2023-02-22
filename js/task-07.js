const textSize = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");



textSize.addEventListener("change", (event) => {
    textChange.style.fontSize = event.target.value + 'px';
});

console.log(textSize);






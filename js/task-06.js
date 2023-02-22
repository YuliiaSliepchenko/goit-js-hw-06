
const inputEls = document.querySelector('#validation-input');

    
    inputEls.addEventListener('blur', event => {
        if (event.target.value.length !== Number(event.target.dataset.length)) {
            event.target.classList.add('invalid')
            event.target.classList.remove('valid')
            console.log('Type 6 symbols!');
         return
        }
        event.target.classList.add('valid')
        event.target.classList.remove('invalid')
        console.log("Accept");
    });
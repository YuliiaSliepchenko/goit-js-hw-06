
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
const inputValue = {
  Email: `${email.value}`,
Password: `${password.value}`
}
console.log(inputValue);
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}



//Challenge 1
function welcome() {
  alert(`Hooray!`);
}

let clickMeButton = document.querySelector("#special-button");
clickMeButton.addEventListener("click", welcome);

//Challenge 2
function showPass(event) {
  event.preventDefault();
  let topSecret = document.querySelector("#password-input");
  alert(`Your top secret password is ${topSecret.value} 👁️`);
}
let pass = document.querySelector("#password-form");
pass.addEventListener("submit", showPass);

//Challenge 3
function showSignUpValues(event) {
  event.preventDefault();
  let emailId = document.querySelector("#email-input");
  let userId = document.querySelector("#username-input");
  alert(`Hello ${userId.value} your email is ${emailId.value}`);
}

let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", showSignUpValues);

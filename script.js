let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let emailValue = document.querySelector(".email").value.trim();
  let passwordValue = document.querySelector(".password").value.trim();
  let emailError = document.querySelector(".emailError");
  let passwordError = document.querySelector(".passwordError");
  let successMessage = document.querySelector(".successMessage");
  // ...............Reset the error................
  emailError.innerText = "";
  passwordError.innerText = "";

  // Validate email
  if (
    emailValue.length < 3 ||
    emailValue.indexOf("@") === -1 ||
    emailValue.indexOf(".") === -1
  ) {
    console.log("enter in email");
    emailError.innerText =
      "Make sure email is more than 3 characters and has @ and a .";
      emailError.style.color="red";
  }

  
  if (passwordValue.length < 8) {
    console.log("enter in password");
    passwordError.innerText = "Password must be at least 8 characters long";
    passwordError.style.color="red";
  }

  
  if (
    emailValue.length >= 3 && 
    emailValue.indexOf("@") !== -1 &&
    emailValue.indexOf(".") !== -1 &&
    passwordValue.length >= 8
  ) {
    console.log("email and password verified");
    successMessage.style.color = "green";
    successMessage.textContent = "All good to go";

    const confirmation = confirm("Confirm?");
    if (confirmation) {
      alert("Successful signup!");
    } 
  }
});

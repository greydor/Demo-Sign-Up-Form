let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
password.addEventListener("input", () => {
  if (confirmPassword.value === "") {
    return;
  }
  if (password.value !== confirmPassword.value) {
    password.className = "wrong-password";
    confirmPassword.className = "wrong-password";
  }
  else if (password.classList.contains("wrong-password")) {
    password.classList.remove("wrong-password");
    confirmPassword.classList.remove("wrong-password");
  }
})

confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    password.className = "wrong-password";
    confirmPassword.className = "wrong-password";
  }
  else if (password.classList.contains("wrong-password")) {
    password.classList.remove("wrong-password");
    confirmPassword.classList.remove("wrong-password");
  }
})

let email = document.querySelector("#email");
email.addEventListener("input", () => {
  email.className = "email";
})
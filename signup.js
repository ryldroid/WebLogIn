const password = document.getElementById("password");
const confirm_pass = document.getElementById("confirm-pass");
const validator = document.getElementById("validator");
const form = document.querySelector("form");

validator.style.display = "none";

password.addEventListener("input", validatePassword);
confirm_pass.addEventListener("input", validatePassword);

function validatePassword() {
  if (password.value === "") {
    validator.style.display = "none";
  } else if (password.value.length < 8) {
    validator.textContent = "Password must be at least 8 characters.";
    validator.style.display = "block";
  } else if (!/\d/.test(password.value)) {
    validator.textContent = "Password must contain at least 1 number.";
    validator.style.display = "block";
  } else if (
    confirm_pass.value !== "" &&
    confirm_pass.value !== password.value
  ) {
    validator.textContent = "Passwords do not match.";
    validator.style.display = "block";
  } else {
    validator.style.display = "none";
  }
}

form.addEventListener("submit", (e) => {
  validatePassword();

  if (validator.style.display === "block") {
    e.preventDefault();
  }
});

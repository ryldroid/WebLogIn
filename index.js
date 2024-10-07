const password = document.getElementById("password");
const validator = document.getElementById("validator");
const login = document.getElementById("login");
const forgot = document.getElementById("forgot");

validator.style.display = "none";

password.addEventListener("change", () => {
  if (password.value === "") {
    validator.style.display = "none";
  } else if (password.value.length < 8) {
    validator.textContent = "Password is at least 8 characters long.";
    validator.style.display = "block";
  } else {
    validator.style.display = "none";
  }
});

forgot.addEventListener("click", () => {
  const width = 500;
  const height = 500;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  window.open(
    "forgot-password.html",
    "Forgot Password",
    `width=${width + 100}, height=${height + 100}, top=${top}, left=${left}`
  );
});

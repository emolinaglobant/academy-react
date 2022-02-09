const inputName = document.querySelector(".inputName");
const inputEmail = document.querySelector(".inputEmail");
const inputNumberPassword = document.querySelector(".inputPassword");
const messageEmail = document.querySelector(".messageEmail");
const messagePass = document.querySelector(".messagePass");
let name, email, numberPassword, message;

const getName = (e) => (name = e.target.value);

const getEmail = (e) => {
  email = e.target.value;
  messageEmail.innerHTML = email.includes("@")
    ? "valid email"
    : "it's not an email";
};

const getNumberPassword = (e) => {
  numberPassword = Number(e.target.value);
  messagePass.innerHTML = isNaN(numberPassword)
    ? "this value is no a number"
    : "";
};

const verifyInput = (e) => {
  e.preventDefault();
  let array = [];
  let inputEmpty;

  array.push(name, email, numberPassword);

  array.forEach((val) => {
    if (val === undefined) {
      inputEmpty = true;
    }
  });
  alert(
    inputEmpty === true
      ? "Please fill all fields"
      : makePassword(name, email, numberPassword)
  );
};

const makePassword = (...values) => {
  let data = ["Bridneys", "leyrinaguilar@gmail.com", 56831502];

  if (JSON.stringify(data) == JSON.stringify(values)) {
    message = "welcome";
    location.reload();
  } else {
    message = "the data is incorrect";
  }
  alert(message);
};

inputName.addEventListener("keyup", getName);
inputEmail.addEventListener("keyup", getEmail);
inputNumberPassword.addEventListener("keyup", getNumberPassword);
document.querySelector(".btnLogin").addEventListener("click", verifyInput);

module.exports = {
  getName,
  getEmail,
  getNumberPassword,
  verifyInput,
  makePassword,
};

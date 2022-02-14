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
    ? "email valido"
    : "Esto no es un email";
};

const getNumberPassword = (e) => {
  numberPassword = Number(e.target.value);
  messagePass.innerHTML = isNaN(numberPassword)
    ? "Coloque un numero valido"
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
      ? "Rellene todos los campos*"
      : makePassword(name, email, numberPassword)
  );
};

const makePassword = (...values) => {
  let data = ["Yeferdon", "koyaher21@gmail.com", 9811902];

  if (JSON.stringify(data) == JSON.stringify(values)) {
    message = "Bienvenido";
    location.reload();
  } else {
    message = "Los datos estan incompletos!";
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

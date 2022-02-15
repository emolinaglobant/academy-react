(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const inputUserName = document.querySelector("#userName");
const inputPassword = document.querySelector("#password");
const inputConfirm = document.querySelector("#confirm");

const errorUserName = document.querySelector(".errorUserName");
const errorPassword = document.querySelector(".errorPassword");
const errorConfirm = document.querySelector(".errorConfirm");
const errorLogin = document.querySelector(".errorLogin");

inputUserName.addEventListener("keydown", onlyLettersNumbers);

const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", validateForm, false);

function onlyLettersNumbers(e) {
  var value = e.target.value;
  if (!e.key.match(/[a-zA-Z0-9]/)) {
    e.preventDefault();
  }
}

function matchPasswords(pwd1, pwd2) {
  let isCorrect;
  if (pwd1 !== pwd2) {
    isCorrect = false;
  } else {
    isCorrect = true;
  }
  return isCorrect;
}

function validateName(userName) {
  let result;
  if (
    userName === null ||
    userName.length < 4 ||
    userName.length > 20 ||
    userName.length === 0
  ) {
    errorUserName.innerText =
      "*You should type a correct user. Only letters and numbers.";
      result = false;
  } else {
    errorUserName.innerText = "";
    result = true;
  }
  return result;
}

function validatePassword(password) {
  let result;
  if (
    password === null ||
    password.length < 4 ||
    password.length > 10 ||
    isNaN(password) ||
    password.length === 0
  ) {
    errorPassword.innerText = "*You should type correct password. Only numbers";
    result = false;
  } else {
    errorPassword.innerText = "";
    result = true;
  }
  return result;
}

function validateConfirm(confirm) {
  let result;
  if (
    confirm === null ||
    confirm.length < 4 ||
    confirm.length > 10 ||
    isNaN(confirm) ||
    confirm.length === 0
  ) {
    errorConfirm.innerText = "*Repeat your password.";
    result = false;
  } else {
    errorConfirm.innerText = "";
    result = true;
  }
  return result;
}

function validateForm(event) {
  event.preventDefault();

  let isValid = 0;
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (validateName(userName)) {
    isValid++;
  }

  if (validatePassword(password)) {
    isValid++;
  }

  if (validateConfirm(confirm)) {
    isValid++;
  }

  console.log(isValid)
  
  if (isValid === 3 && matchPasswords(password,confirm)) {
    alert("You're welcome!");
    errorLogin.hidden = true;
    errorLogin.innerText = "";

  } else {
    alert("Please, try it again.");
    errorLogin.hidden = false;
    errorLogin.innerText = "Password and confirm are different."
  }
}

module.exports = {
  onlyLettersNumbers,
  matchPasswords,
  validateName,
  validatePassword,
  validateConfirm,
  validateForm,
};

},{}]},{},[1]);

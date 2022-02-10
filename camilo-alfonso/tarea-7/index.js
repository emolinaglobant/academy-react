const userName = document.querySelector("#user-name");
const userPassword = document.querySelector("#user-password");
const errorMessages = [];
const regexExpression = /[^a-zA-Z0-9 ]/;

function validateUserName() {
  if (userName === null || userName === "") {
    errorMessages.push("This field cannot be empty");
  }

  if (userName !== "camilo") {
    errorMessages.push("Wrong user name");
  }

  return errorMessages;
}

function validateUserPassword() {
  if (userPassword === "") {
    errorMessages.push("This field cannot be empty");
  }

  if (regexExpression.test(userPassword)) {
    errorMessages.push("this field only accepts numbers and letters ");
  }

  return errorMessages;
}

//error with module exports
//module.exports = { validateUserName, validateUserPassword };

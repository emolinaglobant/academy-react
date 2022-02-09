/**
 * Commented to simulate a test environment.
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginForm = document.getElementById("login-form");
 */

function validatePassword(password) {
  let errors = [];
  if (password.length < 6) {
    errors.push("Your password must be at least 8 characters.");
  }
  if (password.search(/[A-Z]/) < 0) {
    errors.push("Your password must contain at least one uppercase letter.");
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
  }
  return errors;
}

function validateUsername(username) {
  let errors = [];
  if (!!!username) {
    errors.push("Your username should not be empty.");
  }
  if (!!username && (username.length < 6 || username.length > 12)) {
    errors.push("Your username should be between 6 and 12 characters long.");
  }
  return errors;
}

/**
 * Commented to simulate a test environment.
loginForm.addEventListener("submit", (result) => {
  result.preventDefault();
  let errors = [...validateUsername(username.value), ...validatePassword(password.value)];
  if (errors.length > 0) {
    alert(errors.toString().split(",").join("\n"));
  } else {
    alert('Login successful');
  }
});
 */

module.exports = { validateUsername, validatePassword };

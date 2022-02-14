// const form = document.getElementById("form");
// const message = document.getElementById("message");
// const passWordInput = document.getElementById("passWord");
// const userInput = document.getElementById("userName");

const addFailClass = () => {
  message.classList.remove("logSuccessful");
  message.classList.add("logFail");
};

const addSuccessClass = () => {
  message.classList.remove("logFail");
  message.classList.add("logSuccessful");
};

const verifyPassword = (pass) =>
  pass.length >= 8 &&
  (pass.match(/[A-Z]/g) ? pass.match(/[A-Z]/g).length >= 1 : false);

const verifyUser = (nick) =>
  nick.match(/[A-Z]/g) ? nick.match(/[A-Z]/g).length >= 1 : false;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let user = userInput.value;
//   let passWord = passWordInput.value;
//   let failingUser = verifyUser(user) ? "" : "Wrong user.";
//   let failingPass = verifyPassword(passWord) ? "" : "Wrong password.";
//   let canLogIn =
//     verifyUser(user) && verifyPassword(passWord)
//       ? "login"
//       : `try aging: ${failingUser} ${failingPass}`;
//   verifyUser(user) && verifyPassword(passWord)
//     ? addSuccessClass()
//     : addFailClass();
//   message.innerHTML = canLogIn;
// });
 
module.exports = {verifyPassword, verifyUser};
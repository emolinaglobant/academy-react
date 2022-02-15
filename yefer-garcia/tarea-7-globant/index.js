const registerFailed = () => {
  message.classList.remove("Registro exitoso");
  message.classList.add("no pudimos registrarte");
};

const registerSuccess = () => {
  message.classList.remove("no pudimos registrarte");
  message.classList.add("registro exitoso");
};

const verifyPassword = (pass) =>
  pass.length >= 8 &&
  (pass.match(/[A-Z]/g) ? pass.match(/[A-Z]/g).length >= 1 : false);

const verifyUser = (nick) =>
  nick.match(/[A-Z]/g) ? nick.match(/[A-Z]/g).length >= 1 : false;

module.exports = {verifyPassword, verifyUser};





let usernameInfo = document.getElementById("username-info");
let passwordInfo = document.getElementById("password-info");
let submitBtn = document.getElementById("submit");

let testingDB = [
  {
    username: "Bridneys",
    password: "56831502",
  },
  {
    username: "Leyrin",
    password: "15025683",
  },
];

const validateUser = (username) => {
  let user = testingDB.find((el) => el.username === username);

  return user ? user.username : (usernameInfo.innerHTML = "User not found");
};

const validateLogin = (username, password) => {
  let user = testingDB.find((el) => el.username === username);

  if (user) {
    return user.password === password
      ? (passwordInfo.innerHTML = "Login Succesfull")
      : (passwordInfo.innerHTML = "Wrong password");
  } else return "Wrong username";
};

submitBtn.addEventListener("click", () => {
  let usernameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;

  validateUser(usernameInput);
  validateLogin(usernameInput, passwordInput);
});

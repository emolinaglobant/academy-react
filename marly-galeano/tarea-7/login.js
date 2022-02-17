let allUsersData = [
  //Database of all users
  { user: "mgaleano", pwd: "123pwd" },
  { user: "marlyg", pwd: "456pwd" },
  { user: "galeanom", pwd: "789pwd" },
];
const getElementValue = (element) => element.value;
const getPassword = () => getElementValue(pwd);
const getUserName = () => getElementValue(userName);
var indexUser = [];
const loginMessageEdit = (text) =>
  (document.getElementById("loginMessage").innerHTML = text);
const matchPwd = (object) => {
  let pwd = getPassword();
  if (object.pwd == pwd) {
    indexUser[1] = allUsersData.indexOf(object);
  }
};
const matchUser = (object) => {
  let userName = getUserName();
  if (object.user == userName) {
    indexUser[0] = allUsersData.indexOf(object);
    allUsersData.forEach(matchPwd);
  }
}
var pwd = document.getElementById("pwd");
var userName = document.getElementById("userName");
function verifyLogin() {
  allUsersData.forEach(matchUser);

  if (indexUser.length == 2) {
    if (indexUser[0] == indexUser[1]) {
      loginMessageEdit("Successful login");
    } else {
      loginMessageEdit("Your account or password is incorrect.");
    }
  } else {
    loginMessageEdit("Your account or password is incorrect.");
  }
}
//module.exports = sum;

const functions = {
  allUsersData,
  verifyLogin,
  pwd,
  userName,
  indexUser,
  getElementValue,
  getPassword,
  getUserName,
  loginMessageEdit,
  matchPwd,
  matchUser,
};

module.exports = functions;

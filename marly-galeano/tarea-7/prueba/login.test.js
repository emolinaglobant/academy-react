//const sum = require('../login');

const login = require('../login');
 
test('mgaleano username and 123pwd password', () => {
  document.body.innerHTML = `
    <input type='text' id="userName" name=" userName" placeholder="username" required></input>
    <input type="password" id="pwd" name="pwd" placeholder="password" required></input>
    <input type="submit" id="submitButton" value="SIGN IN" onclick="verifyLogin()"></input>
    <h2 id="loginMessage"></h2>
 `;
 
  const userName = document.getElementById('userName');
  const pwd = document.getElementById('pwd');
  const submitButton = document.getElementById('submitButton');
  const loginMessage = document.getElementById('loginMessage');
 
  userName.value = 'marlyg';
  pwd.value = '456pwd';
  submitButton.click();
 
 expect(loginMessage.innerHTML).toBe('Successful login');
})

test('mgaleano username and 123pwd password', () => {
  document.body.innerHTML = `
    <input type='text' id="userName" name=" userName" placeholder="username" required></input>
    <input type="password" id="pwd" name="pwd" placeholder="password" required></input>
    <input type="submit" id="submitButton" value="SIGN IN" onclick="verifyLogin()"></input>
    <h2 id="loginMessage"></h2>
 `;
 
  const userName = document.getElementById('userName');
  const pwd = document.getElementById('pwd');
  const submitButton = document.getElementById('submitButton');
  const loginMessage = document.getElementById('loginMessage');
 
  userName.value = 'marlyg';
  pwd.value = '455pwd';
  submitButton.click();
 
 expect(loginMessage.innerHTML).toBe('Your account or password is incorrect.');
})
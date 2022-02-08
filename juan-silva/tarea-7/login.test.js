const login = require('./login');

test('validate if user exists',()=>{
    expect(login.validateUser('jsilva97')).toStrictEqual({"password": 123456789, "username": "jsilva97"});
});
test('validate if username exists',()=>{
    expect(login.validateUsername('pepito07')).toMatch("pepito07");
});
test('Check if login is correct',()=>{
    expect(login.validateLogin('jsilva97',123456789)).toMatch("Login Succesfull");
});
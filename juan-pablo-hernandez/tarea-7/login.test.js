const login = require('./login');

test('validate if user exists',()=>{
    expect(login.validateUser('juan.hm')).toMatch('juan.hm');
});
test('Check if login is correct',()=>{
    expect(login.validateLogin('juan.hm', 'test1')).toMatch("Login Succesfull");
});
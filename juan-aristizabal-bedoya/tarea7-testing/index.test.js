const signin = require('./index');


test('validate if email exists',()=>{
    expect(signin.validateEmail('camiloaristi')).toMatch("camiloaristi");
});

test('validate if username existe with toEqual',()=>{
  expect(signin.validateEmail('juanbedoya')).toEqual("juanbedoya");
});

test ('validate if password is correct', ()=>{
  expect(signin.validatePassword('colombia123')).toMatch("colombia123")
});

test ('validate if password is correct and not safe', ()=>{
  expect(signin.validatePassword('colombia123')).not.toMatch(/\S+@\S+\.\S+/)
});
//this error will come out because it does not comply with the password validation = (/\S+@\S+\.\S+/)
test ('validate if password is correct and safe', ()=>{
  expect(signin.validatePassword('colombia123')).toMatch(/\S+@\S+\.\S+/)
});
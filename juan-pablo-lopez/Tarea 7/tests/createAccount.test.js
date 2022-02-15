/**
 * @jest-environment jsdom
 */
const login = require('../js/createAccount');
// test('enter email', () => {
//     expect('johndoe@hola.com' ).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
// })

test('validate that Username is not empty', () => {
    expect(login.userInputEmpty).not.toBe(`User cannot be empty`);
});

test('validate that Email is not empty', () => {
    expect(login.emailInputEmpty).not.toBe(`Email cannot be empty`);
});

test('validate that Password is not empty', () => {
    expect(login.passwordInputEmpty).not.toBe(`Password cannot be empty`);(`password cannot be empty`);
});

test('validate that confirmPassword is not empty', () => {
    expect(login.confirmPasswordInputEmpty).not.toBe(`confirmpassword cannot be empty`);
});


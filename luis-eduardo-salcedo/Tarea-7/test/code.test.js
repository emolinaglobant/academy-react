

const Login = require('../js/code')
describe('validate the login', () => {
    test('email if empty', () => {
        expect(Login.validateEmptyEmail.email).not.toBe(`you cannot leave the email empty`);
    })
    test('email if the expression is correct', () =>{
        expect(Login.validateExpressionEmail('eduardo@gmail.com')).toEqual([]);
    })
    test('password if empty', () => {
        expect(Login.valideEmptyPassword.password).not.toBe(`you cannot leave the password empty`);
    })
    test('validate password is correct', () =>{
        expect(Login.validateExpresionPassword('12345678Ld')).toEqual([]);
    })
})
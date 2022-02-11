const login = require('../js/register');

const data = {
    user: "daniel21",
    pass: "123456789",
}

describe("Login tests", () => {
    test('validate if user name is empty', () => {
        expect(login.valdiateUserName.user).not.toBe(`The User Name cannot be empty. <br>`);
    });
    
    test('Validate user name length', () => {
        expect(login.valdiateUserName(data.user)).toStrictEqual([]);
    });

    test('validate if password is empty', () => {
        expect(login.validatePassword.password).not.toBe(`The Password cannot be empty. <br>`);
    });

    test('Validate password length', () => {
        expect(login.validatePassword(data.pass)).toStrictEqual([]);
    });

    test("validate if user is not correct", () => {
        expect(login.correctData("", "")).toStrictEqual([`User not found in database <br>`]);
    });

    test("validate if user is correct", () => {
        expect(login.correctData("daniel21", "123456789")).toEqual(true);
    });
})


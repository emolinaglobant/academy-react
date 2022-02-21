const verifyUsername = require('./verifyUsername');
const verifyPassword = require('./verifyPassword');

const users = new Map();
users.set('userone', "securepass123.");
users.set('usertwo',"egypt.2022");

test("valid username", () => {
    expect(verifyUsername(users, "userone")).toBe(true);
})

test("valid password", () => {
    expect(verifyPassword(users, "userone","securepass123.")).toBe(true);
})

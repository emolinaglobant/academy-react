
const validateLogin = require('./login')

const dataUser = {
    username: "luish",
    password: "@123luishu"
}

test("username can not be empty", ()=>{
    expect(validateLogin.validateUser.username).not.toBe("")
});
test("username must have more than 5 characters", ()=>{
    expect(dataUser.username).toHaveLength(5)
})
test("password must have more than 10 characters", ()=>{
    expect(dataUser.password).toHaveLength(10)
});
test("password must contain one symbol", ()=>{
    expect(dataUser.password).toMatch(/@/)
})
test("password must contain one number", ()=>{
    expect(dataUser.password).toMatch(/[0-9]/)
})    


const login = require("./login");

test("validate if user exists", () => {
  expect(login.validateUser("Bridneys")).toMatch("Bridneys");
});
test("Check if login is correct", () => {
  expect(login.validateLogin("Bridneys", "56831502")).toMatch(
    "Login Succesfull"
  );
});

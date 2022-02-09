const Login = require("../src/login");

describe("Sign in validation", () => {
  test("Entering a valid username and valid password", () => {
    expect(Login.validateUsername("sebas21").length).toBe(0);
  });

  test("Entering an invalid username", () => {
    expect(Login.validateUsername("sebas")).toContain(
      "Your username should be between 6 and 12 characters long."
    );
  });

  test("Entering an invalid password", () => {
    expect(Login.validatePassword("abcd")).toContain(
      "Your password must be at least 8 characters.",
      "Your password must contain at least one uppercase letter.",
      "Your password must contain at least one digit."
    );
  });

  test("Entering an empty username", () => {
    expect(Login.validateUsername("")).toContain(
      "Your username should not be empty."
    );
  });
});

import Login from "./Login.js";

test('Invalid username/password', () => {
    expect(Login.validate("Donvito", "pass?")).toBe("Invalid username or password");
  });
  
test('Empty username', () => {
    expect(Login.validate("", "password123")).toBe("Empty username");
  });

test('Empty password', () => {
    expect(Login.validate("Any", "")).toBe("Empty password");
  });

test('Log in', () => {
    expect(Login.validate("Andrew", "pass:)")).toBe("Logged in");
  });
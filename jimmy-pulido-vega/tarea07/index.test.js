const { verifyPassword, verifyUser } = require("./index");

describe("logIn test", () => {
  test("if passwor has a capital and 8 characters, equal true", () => {
    expect(verifyPassword("Password123")).toBe(true);
  });

  test("if user has a capital, equal true", () => {
    expect(verifyUser("Jimmy")).toBe(true);
  });

  test("if passwor has not a capital and 8 characters, equal false", () => {
    expect(verifyPassword("12345")).toBe(false);
  });

  test("if user has not a capital, equal false", () => {
    expect(verifyUser("jimmy")).toBe(false);
  });
});

/* 
terminal print:
$ npm test --index.test.js

> tarea07@1.0.0 test
> jest

 PASS  ./index.test.js
  √ if passwor has a capital and 8 characters, equal true (8 ms)
  √ if user has a capital, equal true (1 ms)
  √ if passwor has not a capital and 8 characters, equal false (1 ms)
  √ if user has not a capital, equal false

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.342 s
Ran all test suites. 
*/

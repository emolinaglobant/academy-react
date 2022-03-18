const verify = require("./index");

describe("Forms of contact", () => {
  test("show if the email entered is valid", () => {
    const expected = verify.verifyEmail("yefer@gmail.com");
    expect(expected).toBe(true);
  });
  test("show if the email entered is invalid", () => {
    const expected = verify.verifyEmail("yefer@yefer.com");
    expect(expected).toBe(false);
  });
  test("show if the phone number is valid in Peru", () => {
    const expected = verify.verifyphoneNumber("+51 900900900");
    expect(expected).toBe(true);
  });
  test("show if the phone number joined is invalid", () => {
    const expected = verify.verifyphoneNumber("+31 900900900");
    expect(expected).toBe(false);
  });
});

describe("login admin", () => {
  test("show if the email is the team corporative of Solidoct", () => {
    const expected = verify.verifyCorporativeSolidoct("admin@solidoct.com");
    expect(expected).toBe(true);
  });
  test("show if the email joined not is the team corporative", () => {
    const expected = verify.verifyCorporativeSolidoct("admin@gmail.com");
    expect(expected).toBe(false);
  });
});

describe("form register & login", () => {
  test("show if passwords match", () => {
    const expected = verify.verifyMatchBetweenPasswords(
      "Prueba12345",
      "Prueba12345"
    );
    expect(expected).toBe(true);
  });
  test("show if passwords do not match", () => {
    const expected = verify.verifyMatchBetweenPasswords(
      "Prueba12345",
      "Prueba"
    );
    expect(expected).toBe(false);
  });
  test("show if the email entered is valid", () => {
    const expected = verify.verifyEmail("yefer@gmail.com");
    expect(expected).toBe(true);
  });
  test("show if the email entered is invalid", () => {
    const expected = verify.verifyEmail("yefer@yefer.com");
    expect(expected).toBe(false);
  });
  test("show if the password has uppercase and 8 characters, true", () => {
    expect(verify.verifyPassword("Password123")).toBe(true);
  });
  test("show if the password is not upper case and 8 characters long, false", () => {
    expect(verify.verifyPassword("51018")).toBe(false);
  });
  test("show when empty fields are sent", () => {
    const expected = verify.checkEmptyFields("");
    expect(expected).toBe(false);
  });
});

describe("services of Control Panel", () => {
  test("show if date birth is valid", () => {
    const expected = verify.validateBirth("1900-12-30");
    expect(expected).toBe(true);
  });
  test("show if date birth is invalid", () => {
    const expected = verify.validateBirth("1900 12 30");
    expect(expected).toBe(false);
  });
  test("show if firstname or lastname have longitud of one", () => {
    const expected = verify.validateName("Yefer");
    expect(expected).toBe(true);
  });
});

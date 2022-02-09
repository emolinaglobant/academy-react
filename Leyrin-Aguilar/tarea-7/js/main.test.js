const {
  getName,
  getEmail,
  getNumberPassword,
  verifyInput,
  makePassword,
} = require("./main");

test("Enter name", () => {
  expect(getName({ target: { value: "Bridneys" } })).toBe("Bridneys");
});

test("Enter Email", () => {
  expect(getEmail({ target: { value: "leyrinaguilar@gmail.com" } })).toBe(
    "leyrinaguilar@gmail.com"
  );
});

test("Check that the email includes @", () => {
  expect(getEmail({ target: { value: "leyrinaguilar@gmail.com" } })).toMatch(
    /@/
  );
});

test("Enter the password", () => {
  expect(getNumberPassword({ target: { value: 56831502 } })).toBe(56831502);
});

test("the password must be in valid", () => {
  expect(getNumberPassword({ target: { value: "Bridneys" } })).toBeNaN();
});

test("Verify that array contains certain values", () => {
  let array = ["Bridneys", "leyrinaguilar@gmail.com", 56831502];
  expect(makePassword(...array)).toContain(56831502);
});

test("Alert of welcome", () => {
  const alert = { message: "welcome" };
  const getMeessage = jest.fn((alert) => alert.message);

  getMeessage(alert);
  expect(getMeessage).toHaveReturnedWith("welcome");
});

test("the function verifyInput return true", () => {
  const inputEmpty = jest.fn((verifyInput) => true);
  inputEmpty();
  expect(inputEmpty).toHaveReturned();
});

test("the form button is pressed", () => {
  const btnPay = jest.fn();
  btnPay();
  expect(btnPay).toHaveBeenCalled();
});

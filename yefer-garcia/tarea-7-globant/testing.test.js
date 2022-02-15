const { verifyPassword, verifyUser } = require("./index");

describe("logIn test", () => {
  test("si la contraseña tiene mayúscula y 8 caracteres, true", () => {
    expect(verifyPassword("Password123")).toBe(true);
  });

  test("Si el usuario tiene un mayuscula, true", () => {
    expect(verifyUser("Yeferdon")).toBe(true);
  });

  test("si la contraseña no tiene mayúsculas y 8 caracteres, false", () => {
    expect(verifyPassword("51028")).toBe(false);
  });

  test("si el usuario no tiene un mayuscula,false", () => {
    expect(verifyUser("yeferdon")).toBe(false);
  });
});
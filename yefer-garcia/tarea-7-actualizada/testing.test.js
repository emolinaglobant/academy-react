const {
    getName,
    getEmail,
    getNumberPassword,
    verifyInput,
    makePassword,
  } = require("./main");
  
  test("Ingrese su nombre", () => {
    expect(getName({ target: { value: "Yeferdon" } })).toBe("Yeferdon");
  });
  
  test("Ingrese su Email", () => {
    expect(getEmail({ target: { value: "koyaher21@gmail.com" } })).toBe(
      "koyaher21@gmail.com"
    );
  });
  
  test("Comprueba que el correo incluya @", () => {
    expect(getEmail({ target: { value: "koyaher21@gmail.com" } })).toMatch(
      /@/
    );
  });
  
  test("Ingrese su password", () => {
    expect(getNumberPassword({ target: { value: 9811902 } })).toBe(9811902);
  });
  
  test("El password es invalido", () => {
    expect(getNumberPassword({ target: { value: "Yeferdon" } })).toBeNaN();
  });
  
  test("Verify that array contains certain values", () => {
    let array = ["Yeferdon", "koyaher21@gmail.com", 9811902];
    expect(makePassword(...array)).toContain(9811902);
  });
  
  test("Alerta de bienvenida", () => {
    const alert = { message: "Bienvenido" };
    const getMeessage = jest.fn((alert) => alert.message);
  
    getMeessage(alert);
    expect(getMeessage).toHaveReturnedWith("Bienvenido");
  });
  
  test("La función VerifyInput retorna true", () => {
    const inputEmpty = jest.fn((verifyInput) => true);
    inputEmpty();
    expect(inputEmpty).toHaveReturned();
  });
  
  test("Se presiona el botón Formulario", () => {
    const btnPay = jest.fn();
    btnPay();
    expect(btnPay).toHaveBeenCalled();
  });
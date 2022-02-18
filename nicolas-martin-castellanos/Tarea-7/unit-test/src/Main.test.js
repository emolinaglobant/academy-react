import Main from "./Main.js";

test('Password Invalido', () => {
    expect(Main.VDPersona("nicolas.martin.castellanos@hotmail.com", "123445")).toBe("La Contraseña Es Incorrecta");
  });
test('Usuario Invalido', () => {
    expect(Main.VDPersona("admin", "123456")).toBe("El Usuario Es Incorrecto");
  });
  
test('Password vacio', () => {
    expect(Main.VDPersona("nicolas.martin.castellanos@hotmail.com", "")).toBe("El Password Es Un Campo Obligatorio");
  });

test('Usuario vacio', () => {
    expect(Main.VDPersona("", "123456")).toBe("El Usuario Es Un Campo Obligatorio");
  });

test('ingreso exitoso', () => {
    expect(Main.VDPersona("nicolas.martin.castellanos@hotmail.com", "123456")).toBe("Datos Correctos");
  });
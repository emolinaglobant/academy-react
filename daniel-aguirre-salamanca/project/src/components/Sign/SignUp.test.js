import { validateSignUp } from "../../helpers";
const users = {
  admin: "admin123"
};
test("Empty Username", () => {
  const newUser = {
    username: "",
    password: "asj",
    repeatedPassword: "asj",
  };
  const [status, message] = validateSignUp(newUser, users);
  expect(message).toBe("Please, fill all the fields");
});
test("Empty password", () => {
  const newUser = {
    username: "donvito",
    password: "",
    repeatedPassword: "",
  };
  const [status, message] = validateSignUp(newUser, users);
  expect(message).toBe("Please, fill all the fields");
});

test("not same passwords", () => {
    const newUser = {
        username: "donvito",
        password: "pass123",
        repeatedPassword: "pass12",
      };
      const [status, message] = validateSignUp(newUser, users);
      expect(message).toBe("The passwords do not coincide");
});

test("succesfull sign up", () => {
    const newUser = {
        username: "donvito",
        password: "pass123",
        repeatedPassword: "pass123",
      };
      const [status, message] = validateSignUp(newUser, users);
      expect(message).toBe("User created succesfully");
});



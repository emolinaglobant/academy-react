import { validateSignIn } from "../../helpers";
const users = {
  admin: "admin123"
};

test("User doesnt exist", () => {
  const user = {
    username: "example",
    password: "pass123",
  };
  const [status, message] = validateSignIn(user, users);
  expect(message).toBe("The user doesnt exist");
});

test("Invalid password", () => {
  const user = {
    username: "donvito",
    password: "blabla",
  };
  const [status, message] = validateSignIn(user, {...users, donvito: "pass123"});
  expect(message).toBe("Wrong password");
});

test("succesfull sign in", () => {
    const user = {
        username: "donvito",
        password: "pass123",
        repeatedPassword: "pass123",
      };
      const [status, message] = validateSignIn(user, {...users, donvito: "pass123"});
      expect(message).toBe("Signed in");
});



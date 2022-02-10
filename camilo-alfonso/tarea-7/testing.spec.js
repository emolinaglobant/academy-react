const { it, expect } = require("@jest/globals");
const regex = /[^a-zA-Z0-9 ]/;
//const testing = require("./index");

// object created  to test internally
const userInfo = {
  name: "camilo",
  password: "camilo2022",
};

describe("Login form", () => {
  it("validate if user name is empty", () => {
    expect(userInfo.name).not.toBe("");
  });

  it("validate if user is correct ", () => {
    expect(userInfo.name).toEqual(userInfo.name);
  });

  it("validate if user password is empty", () => {
    expect(userInfo.password).not.toBe("");
  });

  it("validate regex inside password", () => {
    expect(userInfo.password).toEqual(expect.not.stringMatching(regex));
  });
});

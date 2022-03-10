import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Card from "./card";

const testObject = {
  img: "https://www.anUrl.com",
  alt_name: "an_alternativeName",
  creature_name: "aCreatureName",
  group: "aTypeOfBeast",
  hunted: true,
};

describe("Card render & props validation", () => {
  it("Card renders correctly", () => {
    const section = document.createElement("section");
    ReactDOM.render(<Card />, section);
  });

  test("Have an URL img as property", () => {
    expect(testObject.img).toBeTruthy();
    expect(testObject.img).toContain("https://");
  });

  test("Have a boolean hunted property", () => {
    expect(typeof testObject.hunted).toBe("boolean");
  });

  test("Have an alt name as property", () => {
    expect(testObject.alt_name).toBeTruthy();
  });

  test("Have an creature name as property", () => {
    expect(testObject.creature_name).toBeTruthy();
  });

  test("Have group as property", () => {
    expect(testObject.group).toBeTruthy();
  });
});

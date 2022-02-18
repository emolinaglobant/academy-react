import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import { CentralGame } from "../../components/CentralGame";

describe("Tests components CentralGame", () => {
  const lives = 0;
  const points = 0;
  const numberQuestion = "🛳️  🏔️  💔 💀 ";
  let wrapper = shallow(
    <CentralGame
      lives={lives}
      points={points}
      numberQuestion={numberQuestion}
    />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <CentralGame
        lives={lives}
        points={points}
        numberQuestion={numberQuestion}
      />
    );
  });

  test("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have render h1 with text Guess the movie", () => {
    const h1 = wrapper.find("h1");
    expect(h1.text().trim()).toBe("Guess the movie");
  });

  test("should have render section with prop questionGame", () => {
    const section = wrapper.find("section");
    expect(section.text().trim()).toBe("🛳️  🏔️  💔 💀");
  });

  test("should button have class btn", () => {
    const btnSubmit = wrapper.find("button");
    //console.log(btnSubmit.props());
    const className = btnSubmit.prop("className");
    expect(className.includes("btn")).toBe(true);
  });

  const setPoints = jest.fn();
  const randomQuestion = jest.fn();
  const setLives = jest.fn();
  const handleReset = jest.fn();

  test("should not post submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setPoints).not.toHaveBeenCalled();
    expect(handleReset).not.toHaveBeenCalled();
    expect(randomQuestion).not.toHaveBeenCalled();
  });
});

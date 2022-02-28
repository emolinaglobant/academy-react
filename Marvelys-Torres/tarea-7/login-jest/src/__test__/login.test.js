import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { Login } from "../pages/login";

describe("Formlogin tests", () => {
  test("should render button text", () => {
    render(<Login />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Login");
  });

  test("should render inputs", () => {
    render(<Login />);
    const inputs = screen.getAllByTestId("form-input");
    const usernameInput = inputs[0];
    expect(usernameInput.value).toBe("");
    const emailInput = inputs[1];
    expect(emailInput.value).toBe("");
    const passwordInput = inputs[2];
    expect(passwordInput.value).toBe("");
  });

  test("should button not to be disabled", () => {
    render(<Login />);
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("if user submits there is a text that says submitted", () => {
    render(<Login />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Login");
    fireEvent.click(button);
    expect(button.textContent).toBe("Submitted");
  });

  test("should all inputs are filled and have correct texts", () => {
    render(<Login />);
    const inputs = screen.getAllByTestId("form-input");
    expect(inputs.length).toBe(3);

    fireEvent.change(inputs[0], { target: { value: "Marvelys" } });
    expect(inputs[0].value).toBe("Marvelys");
    fireEvent.change(inputs[1], { target: { value: "marve@gmail.com" } });
    expect(inputs[1].value).toBe("marve@gmail.com");
    fireEvent.change(inputs[2], { target: { value: "frijoles" } });
    expect(inputs[2].value).toBe("frijoles");
  });
});

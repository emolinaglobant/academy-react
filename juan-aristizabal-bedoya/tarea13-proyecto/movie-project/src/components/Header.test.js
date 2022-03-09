import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("should renders content of header", () => {
  const component = render(<Header />);
  console.log(component);
});

test('should renders text "movie directory"', () => {
  const component = render(<Header />);
  expect(component.container).toHaveTextContent("Movie Directory");
});

test('should renders text "juan aristizabal"', () => {
  const component = render(<Header />);
  expect(component.container).toHaveTextContent("Juan Aristizabal");
});

test('should renders the alt text from image', () => {
  const component = render(<Header />);
  expect(screen.getByAltText("application logo")).toBeInTheDocument();
});

import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import NavButton from "./navButton";

describe("NavButton render correctly", () => {
  it("NavButton render correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <NavButton />
      </BrowserRouter>,
      div
    );
  });

  //test("Have an string", () => {});
});

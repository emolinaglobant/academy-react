import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import DropMenu from "./dropMenu";


describe("dropMenu render alidation", () => {
  it("Card renders corretly", () => {
    const section = document.createElement("section");
    ReactDOM.render(<DropMenu />, section);
  });
});

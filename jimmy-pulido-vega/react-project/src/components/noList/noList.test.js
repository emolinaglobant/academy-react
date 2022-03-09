import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import NoList from "./noList";

test("none list render corectly", () =>{
    const section = document.createElement("section");
    ReactDOM.render(<NoList />, section);
})
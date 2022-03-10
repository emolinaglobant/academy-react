import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Fotter from "./footer";

describe("Footer render", () => {
    it("Footer render correctly", () =>{
        const footer = document.createElement("footer");
        ReactDOM.render(<Fotter />, footer)
    })
})
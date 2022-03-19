import "@testing-library/jest-dom/extend-expect";
import { render} from "@testing-library/react";
import About from "./About";

describe("test for the about component", () => {

    test("render elements with li tag", () => {

        const component = render(<About />)
        const ul = component.container.querySelector("ul");
        expect(ul).toBeDefined();
    })
})
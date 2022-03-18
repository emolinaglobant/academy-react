import Home from "./home";
import { render } from "@testing-library/react";

test('should renders text "Travel with us to meet all the characters in this universe"', () => {
  const component = render(<Home />);
  expect(component.container).toHaveTextContent(
    "Travel with us to meet all the characters in this universe"
  );
});

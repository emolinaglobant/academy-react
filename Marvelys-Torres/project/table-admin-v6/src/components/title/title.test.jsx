import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { Title} from '.'

describe("testing entry component", () => {
  test("should render the correct text", () => {
    render(
        <BrowserRouter >
      <Provider store={store}>
        <Title text="Hello world" />
      </Provider>
        </BrowserRouter>
    );
      const text = screen.getByText('Hello world')
      expect(text).toBeInTheDocument()

  });
  test("should have a classname called title-style", () => {
    render(
        <BrowserRouter >
      <Provider store={store}>
        <Title text="Hello world" />
      </Provider>
        </BrowserRouter>
    );
      const text = screen.getByText('Hello world')
      expect(text).toHaveClass('title-style')

  });
});

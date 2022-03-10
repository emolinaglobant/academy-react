import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { Header } from ".";

describe("testing Header component", () => {
  test("should render the correct text", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const title = screen.getByText("Restaurant Admin");
    expect(title).toBeInTheDocument();
  });
  test("should render the correct class", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const section = screen.getByTestId("header");
    expect(section).toHaveClass("header-style");
  });
});

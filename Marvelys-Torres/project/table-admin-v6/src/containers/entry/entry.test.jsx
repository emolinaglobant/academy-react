import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { Entry } from ".";

describe("testing entry component", () => {
  test("should render the correct title and userMessage", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Entry />
        </Provider>
      </BrowserRouter>
    );
    const title = screen.getByText("Welcome");
    const userMessage = screen.getByText(
      "To start attention please click on the table"
    );
    expect(title).toBeInTheDocument();
    expect(userMessage).toBeInTheDocument();
  });
});

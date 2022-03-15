import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { Bill } from ".";

describe("testing Bill component", () => {
  test("should render the correct names", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Bill />
        </Provider>
      </BrowserRouter>
    );
    const title = screen.getByText("Bill");
    const backButton = screen.getByRole("button", { name: "back to main" });
    const tableButton = screen.getByRole("button", { name: "back to table" });
    expect(title).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(tableButton).toBeInTheDocument();
  });
});

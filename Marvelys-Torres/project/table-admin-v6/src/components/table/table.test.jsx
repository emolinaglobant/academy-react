import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { Table } from ".";

describe("testing Table component", () => {
  test("should render table", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Table id={9} />
        </Provider>
      </BrowserRouter>
    );
    const text = screen.getByText("Table 9");
    expect(text).toBeInTheDocument();
  });
});

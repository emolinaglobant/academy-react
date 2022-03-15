import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { Layout } from ".";

describe("testing Layout component", () => {
  test("should render the correct text", () => {
    render(
        <BrowserRouter >
      <Provider store={store}>
        <Layout>Petah Parkah</Layout>
      </Provider>
        </BrowserRouter>
    );
      const children = screen.getByText(/petah parkah/i)
      expect(children).toBeInTheDocument()
  });

});

import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { DishComponent } from ".";

describe("testing DishComponent component", () => {
  test("should render the correct name and quantity of the dish", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DishComponent
            dish={{
              id: 3242,
              name: "Ají de gallina",
              quantity: 3,
            }}
          />
        </Provider>
      </BrowserRouter>
    );

    const name = screen.getByText(/ají de gallina/i);
    const quantity = screen.getByText(/3/i);
    expect(name).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
  });

  test("should render the correct quantity and test the button add", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DishComponent
            dish={{
              id: 3242,
              name: "Ají de gallina",
              quantity: 3,
            }}
          />
        </Provider>
      </BrowserRouter>
    );

    const addOneButton = screen.getByTestId("button-add");
    fireEvent.click(addOneButton);
    const quantity = screen.getByTestId("quantity");
    expect(quantity).toHaveTextContent(3);
  });
});

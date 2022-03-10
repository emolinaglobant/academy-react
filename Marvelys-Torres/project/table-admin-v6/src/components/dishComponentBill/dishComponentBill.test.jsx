import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { DishComponentBill } from ".";

describe("testing DishComponentBill component", () => {
  test("should render the correct texts", () => {

    const dishObject = {
        name:'Lomo Saltado',
        quantity: 2,
        price: 48
    }

    render(
        <BrowserRouter >
      <Provider store={store}>
        <DishComponentBill dish={dishObject} />
      </Provider>
        </BrowserRouter>
    );
      const name = screen.getByTestId('name')
      expect(name).toHaveTextContent('Lomo Saltado')
      const quantity = screen.getByTestId('quantity')
      expect(quantity).toHaveTextContent('2')
      const price = screen.getByTestId('price')
      expect(price).toHaveTextContent('$ 48')
  });
});

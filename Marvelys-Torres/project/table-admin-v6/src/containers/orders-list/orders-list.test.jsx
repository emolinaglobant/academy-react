import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { OrdersList } from ".";

describe("testing OrdersList component", () => {
  test("should render the correct text", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <OrdersList />
        </Provider>
      </BrowserRouter>
    );

    const title = screen.getByText(/Orders of the day/i);
    expect(title).toBeInTheDocument();
  });
});

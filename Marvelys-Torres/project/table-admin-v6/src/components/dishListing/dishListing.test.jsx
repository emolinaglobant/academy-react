import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { DishListing } from ".";

describe("testing DishListing component", () => {
  test("should test the class of the component", () => {
    render(
      <BrowserRouter>
        <reactRedux.Provider store={store}>
          <DishListing />
        </reactRedux.Provider>
      </BrowserRouter>
    );

    const list = screen.getByTestId("dish-listing");
    expect(list).toHaveClass("dish-listing");
  });
});

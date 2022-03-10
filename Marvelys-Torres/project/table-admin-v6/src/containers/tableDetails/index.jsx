import React from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/title";
import { AutoComplete, Select } from "antd";
import { DishListing } from "../../components/dishListing";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDishAction,
  selectWaiterAction,
} from "../../redux/actions/dishActions";
import "./index.css";

const { Option } = Select;
const waiters = [
  {
    id: 0,
    value: "Karelys",
  },
  {
    id: 1,
    value: "Emilia",
  },
  {
    id: 2,
    value: "Pablo",
  },
  {
    id: 3,
    value: "Eduardo",
  },
];
export const TableDetails = () => {
  const navigate = useNavigate();
  const backToMain = () => {
    navigate("/");
  };
  const goToBill = () => {
    navigate(`/bill`);
  };

  const dispatch = useDispatch();
  function handleChange(value) {
    dispatch(selectWaiterAction(value));
  }
  const { dishes, selectedWaiter, selectedDishes } = useSelector(
    (state) => state.allDishes
  );
  const isButtonDisabled = !selectedWaiter || !selectedDishes.length;

  const options2 = dishes?.map((dish) => ({
    value: dish.name,
    id: dish.id,
    price: dish.price,
  }));

  const Complete = () => (
    <AutoComplete
      dropdownClassName="autocomplete"
      style={{
        minWidth: "200px",
        color: "black",
        fontWeight: "bolder",
        fontSize: "1rem",
      }}
      onSelect={(value, option) => {
        dispatch(
          selectDishAction({
            id: option.id,
            name: value,
            quantity: 1,
            price: option.price,
          })
        );
      }}
      options={options2}
      placeholder="order here"
      filterOption={(inputValue, option) => {
        return (
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        );
      }}
    />
  );
  return (
    <>
      <Title text={`Table Details`} />
      <article className="table-details">
        <section
          aria-label="in this section you must choose the waiter"
          className="inputs-details"
        >
          <label htmlFor="waiter">Waiter : </label>
          <Select
            value={selectedWaiter || ""}
            onChange={handleChange}
            className="select-waiter"
            style={{
              minWidth: "150px",
              color: "black",
              fontWeight: "bolder",
              fontSize: "1rem",
            }}
          >
            {waiters.map((waiter) => (
              <Option
                key={waiter.id}
                value={waiter.value}
                className="option-waiter"
                style={{
                  minWidth: "150px",
                  color: "black",
                  fontWeight: "bolder",
                  fontSize: "1rem",
                }}
              >
                {waiter.value}
              </Option>
            ))}
          </Select>
          <label htmlFor="order">Order : </label>
          <Complete
            aria-label="here you can place the initial of the order you want to make"
            style={{
              minWidth: "150px",
              color: "black",
              fontWeight: "bolder",
              fontSize: "1rem",
            }}
          />
        </section>
        <DishListing />
        <h4
          aria-label="to end attention there must be a selected waiter and at least one
          order"
          className="attention-message"
        >
          To end attention there must be a selected waiter and at least one
          order.
        </h4>
        <section
          aria-label="in this seccion there are buttons to navigate"
          className="button-section"
        >
          <button
            aria-label="back to manin button"
            className="direction-button"
            onClick={backToMain}
          >
            back to main
          </button>
          <button
            aria-label="this button is enabled when there is a selected waiter and at least one order"
            style={{
              backgroundColor: isButtonDisabled ? "#9D9D9D" : "#1a1a40",
            }}
            disabled={isButtonDisabled}
            className="direction-button"
            onClick={goToBill}
          >
            end attention
          </button>
        </section>
      </article>
    </>
  );
};

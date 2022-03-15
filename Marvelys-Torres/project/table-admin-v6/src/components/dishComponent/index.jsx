import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  removeSelectedDishAction,
  incrementDishByOneAction,
  decrementDishByOneAction,
} from "../../redux/actions/dishActions";
import "./index.css";

export const DishComponent = ({ dish }) => {
  const dispatch = useDispatch();

  const handleAddOne = () => {
    dispatch(incrementDishByOneAction(dish.id));
  };
  const handleDecreaseOne = () => {
    dish.quantity > 1 && dispatch(decrementDishByOneAction(dish.id));
  };
  const handleRemoveDish = () => {
    dispatch(removeSelectedDishAction(dish));
  };
  return (
    <article data-testid="dish-item" className="dish-item">
      <h4 aria-label="dish name" data-testid="name" className="dish-name">
        {dish.name}
      </h4>
      <section
        aria-label="change quantities and delete order"
        className="dish-details"
      >
        <button
          className="dish-button"
          data-testid="button-decrease"
          onClick={handleDecreaseOne}
        >
          <FontAwesomeIcon icon={faCircleMinus} />
        </button>
        <section data-testid="quantity" className="dish-quantity">
          {dish.quantity}
        </section>
        <button
          className="dish-button"
          data-testid="button-add"
          onClick={handleAddOne}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
        <button
          className="dish-button"
          data-testid="button-remove"
          onClick={handleRemoveDish}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </section>
    </article>
  );
};

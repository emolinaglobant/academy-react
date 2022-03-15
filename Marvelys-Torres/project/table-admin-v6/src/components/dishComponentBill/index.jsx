import React from "react";
import "./index.css";

export const DishComponentBill = ({ dish }) => {
  return (
    <section aria-label="order summary" className="dish-bill">
      <p data-testid="name">{dish.name}</p>
      <p data-testid="quantity">{dish.quantity}</p>
      <p data-testid="price">$ {dish.price}</p>
    </section>
  );
};

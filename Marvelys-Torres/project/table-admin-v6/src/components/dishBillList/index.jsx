import React from "react";
import { useSelector } from "react-redux";
import { DishComponentBill } from "../dishComponentBill";

export const DishBillList = () => {
  const dishes = useSelector((state) => state.allDishes.selectedDishes);

  return (
    <section aria-label="order served">
      {dishes?.map((dish) => (
        <DishComponentBill key={dish.id} dish={dish} />
      ))}
    </section>
  );
};

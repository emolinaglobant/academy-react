import React, { useEffect } from "react";
import { getMenuOptions } from "../../services";
import { useSelector } from "react-redux";
import { DishComponent } from "../dishComponent";
import { useDispatch } from "react-redux";
import { setDishesAction } from "../../redux/actions/dishActions";

export const DishListing = () => {
  const dispatch = useDispatch();
  const { selectedDishes } = useSelector((state) => state.allDishes);

  const fetchDishes = async () => {
    const data = await getMenuOptions();
    dispatch(setDishesAction(data));
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <section
      aria-label="dish listing"
      data-testid="dish-listing"
      className="dish-listing"
    >
      {selectedDishes.map((dish) => (
        <DishComponent key={dish.id} dish={dish} />
      ))}
    </section>
  );
};

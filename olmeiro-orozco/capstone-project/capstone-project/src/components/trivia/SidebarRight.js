import React from "react";
import { useSelector } from "react-redux";

export const SidebarRight = () => {
  const { totalPrize } = useSelector((state) => state.game);

  return (
    <aside className="trivia__sidebar-right">
      <h2>Outcomes:</h2>
      <section className="trivia__acumulated">
        <h4>Points accumulated:</h4>
        <p>{`${totalPrize}`}</p>
      </section>
      <section className="trivia__totalAward">
        <h4>Total Prize: </h4>
        <p>25 points</p>
      </section>
    </aside>
  );
};

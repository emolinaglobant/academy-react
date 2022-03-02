import React from "react";

export const SidebarRight = () => {
  return (
    <aside className="trivia__sidebar-right">
      <h2>Resultados:</h2>
      <section className="trivia__acumulated">
        <h4>Acumulado</h4>
        <p>25 puntos</p>
      </section>
      <section className="trivia__totalAward">
        <h4> Premio Total: </h4>
        <p>25 puntos</p>
      </section>
    </aside>
  );
};
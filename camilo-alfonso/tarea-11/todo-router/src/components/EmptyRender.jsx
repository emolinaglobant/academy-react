import React from "react";

import "../assets/css/emptyRender.css";

const EmptyRender = () => {
  return (
    <main className="emptyRender">
      <header>
        <h1 className="emptyRender__header">Task Board</h1>
      </header>
      <article className="emptyRender__descriptions">
        <section>🔴 Close task</section>
        <section>🟡 Open task</section>
        <section>🟢 Check task</section>
      </article>
    </main>
  );
};

export default EmptyRender;

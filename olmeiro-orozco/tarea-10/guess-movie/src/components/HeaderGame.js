import React, { useState } from "react";
import Proptypes from "prop-types";

export const HeaderGame = ({ livesGame, pointsGame }) => {
  return (
    <header className="headerGame">
      <section className="headerGame__lives">
        <p>Lives: {livesGame}</p>
      </section>
      <section className="headerGame__points">
        <p>Points: {pointsGame}</p>
      </section>
    </header>
  );
};

HeaderGame.prototypes = {
  livesGame: Proptypes.number.isRequired,
  pointsGame: Proptypes.number.isRequired,
};

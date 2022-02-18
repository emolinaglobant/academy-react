import Proptypes from "prop-types";

import { CentralGame } from "./components/CentralGame";

export const GameScreen = ({ lives, points, numberQuestion }) => {
  return (
    <>
      <CentralGame lives={lives} points={points} question={numberQuestion} />
    </>
  );
};

GameScreen.prototypes = {
  lives: Proptypes.number.isRequired,
  points: Proptypes.number.isRequired,
  numberQuestion: Proptypes.number.isRequired,
};

GameScreen.defaultProps = {
  lives: 3,
  points: 0,
  numberQuestion: 0,
};

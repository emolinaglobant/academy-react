import { Box } from "./box.js";
import { State } from "./state.js";
import { swapBoxes, puzzleReady } from "./helpers.js";

export class Game {
  state;

  constructor(state) {
    this.state = state;
    this.renderGame();
  }

  static init() {
    return new Game(State.init());
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.renderGame();
  }

  clickBox = (box) => {
    return () => {
      const boxesAround = box.getBoxAround();
      const whiteBox = boxesAround.find(
        (boxAround) => this.state.grid[boxAround.row][boxAround.column] === 0
      );

      if (whiteBox) {
        const newGrid = [...this.state.grid];
        swapBoxes(newGrid, box, whiteBox);

        if (puzzleReady(newGrid)) {
          this.setState({
            state: "youWon",
            grid: newGrid,
          });
        } else {
          this.setState({
            grid: newGrid,
          });
        }
      }
    };
  };

  renderGame() {
    const { grid, state } = this.state;
    const newGrid = document.createElement("section");

    newGrid.className = "gridGame";

    grid.forEach((box, row) => {
      box.forEach((box, column) => {
        const button = document.createElement("button");

        if (state === "playing") {
          button.addEventListener("click", this.clickBox(new Box(column, row)));
        }
        button.textContent =
          grid[row][column] === 0 ? "" : grid[row][column].toString();
        newGrid.appendChild(button);
      });
    });

    document.querySelector(".gridGame").replaceWith(newGrid);
    const initGame = document.getElementById("startGame");

    if (state === "init") initGame.textContent = "Play";
    if (state === "playing") initGame.textContent = "New Game";
    if (state === "youWon") initGame.textContent = "Game again";
  }
}
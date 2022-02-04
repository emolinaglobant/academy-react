import SlidingPuzzle from "./slidingPuzzle.js";
import State from "./state.js";
import {alternateSlidingPuzzle, isSolved} from "./code.js";

export default class SlidingPuzzleGame {
  constructor(state) {
    this.state = state;
    this.tickId = null;
    this.tick = this.tick.bind(this);
    this.stats();
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  static ready() {
    return new SlidingPuzzleGame(State.ready());
  }

  tick() {
    this.setState({ time: this.state.time + 1 });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.stats();
  }

  handleClickButton(item) {
    return function () {
      const allSlidingItems = item.getAllSlidingItems();
      const emptyButton = allSlidingItems.find(
        (nextdoorBox) => this.state.grid[nextdoorBox.y][nextdoorBox.x] === 0
      );
      if (emptyButton) {
        const newGrid = [...this.state.grid];
        alternateSlidingPuzzle(newGrid, item, emptyButton);
        if (isSolved(newGrid)) {
          clearInterval(this.tickId);
          this.setState({
            status: "COMPLETED!",
            grid: newGrid,
            move: this.state.move + 1,
          });
        } else {
          this.setState({
            grid: newGrid,
            move: this.state.move + 1,
          });
        }
      }
    }.bind(this);
  }

  stats() {
    const { grid, move, time, status } = this.state;
    const newGrid = document.createElement("section");
    newGrid.className = "grid";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const button = document.createElement("button");
        if (status === "is playing") {
          button.addEventListener("click", this.handleClickButton(new SlidingPuzzle(j, i)));
        }
        button.textContent = grid[i][j] === 0 ? "" : grid[i][j].toString();
        newGrid.appendChild(button);
      }
    }
    document.querySelector(".grid").replaceWith(newGrid);

    const newButton = document.createElement("button");
    if (status === "ready") newButton.textContent = "Play";
    if (status === "is playing") newButton.textContent = "Restart";
    if (status === "COMPLETED!") newButton.textContent = "Play";
    newButton.addEventListener("click", () => {
      clearInterval(this.tickId);
      this.tickId = setInterval(this.tick, 1000);
      this.setState(State.start());
    });
    document.querySelector(".game__stats button").replaceWith(newButton);
    document.getElementById("move").textContent = `Move: ${move}`;
    document.getElementById("time").textContent = `Time: ${time}`;
    if (status === "COMPLETED!") {
    } else {
      ("");
    }
  }
}
const GAME = SlidingPuzzleGame.ready();
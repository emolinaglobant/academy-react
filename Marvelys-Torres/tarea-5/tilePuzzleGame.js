import TilePuzzle from "./tilePuzzle.js";
import State from "./state.js";
import { alternateTilePuzzle, isSolved } from "./main.js";
import { generatedArray } from "./utils.js";

const roundIndex2 = generatedArray(4);

export default class TilePuzzleGame {
  constructor(state) {
    this.state = state;
    this.tickId = null;
    this.tick = this.tick.bind(this);
    this.stats();
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  static ready() {
    return new TilePuzzleGame(State.ready());
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
        alternateTilePuzzle(newGrid, item, emptyButton);
        if (isSolved(newGrid)) {
          clearInterval(this.tickId);
          this.setState({
            status: "completed",
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
    roundIndex2.forEach((element, indexA) => {
      roundIndex2.forEach((element, indexB) => {
        const button = document.createElement("button");
        if (status === "playing") {
          button.addEventListener(
            "click",
            this.handleClickButton(new TilePuzzle(indexB, indexA))
          );
        }
        button.textContent =
          grid[indexA][indexB] === 0 ? "" : grid[indexA][indexB].toString();
        newGrid.appendChild(button);
      });
    });
    document.querySelector(".grid").replaceWith(newGrid);

    const newButton = document.createElement("button");
    if (status === "ready") newButton.textContent = "Play";
    if (status === "playing") newButton.textContent = "Restart";
    if (status === "completed") newButton.textContent = "Play";
    newButton.addEventListener("click", () => {
      clearInterval(this.tickId);
      this.tickId = setInterval(this.tick, 1000);
      this.setState(State.start());
    });
    document.querySelector(".footer button").replaceWith(newButton);
    document.getElementById("move").textContent = `Move: ${move}`;
    document.getElementById("time").textContent = `Time: ${time}`;
    if (status === "completed") {
    } else {
      ("");
    }
  }
}
const Match = TilePuzzleGame.ready();

import { getGridRandom } from "./helpers.js";

export class State {
  grid;
  state;

  constructor(grid, state) {
    this.grid = grid;
    this.state = state;
  }

  static ready() {
    return new State(
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      "ready"
    );
  }

  static init() {
    return new State(getGridRandom(), "playing");
  }
}
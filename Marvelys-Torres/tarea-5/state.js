import { getRamdomPositions } from "./index.js";

export default class State {
  constructor(grid, move, time, status) {
    this.grid = grid;
    this.move = move;
    this.time = time;
    this.status = status;
  }

  static ready() {
    return new State(
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      0,
      0,
      "ready"
    );
  }

  static start() {
    return new State(getRamdomPositions(), 0, 0, "playing");
  }
}

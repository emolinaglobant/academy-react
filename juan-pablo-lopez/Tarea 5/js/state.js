import {getRamdomPositions} from "./code.js";

export default class State {
    constructor(grid, move, time, status) {
    this.grid = grid;
    this.move = move;
    this.time = time;
    this.status = status;
    }

    static start() {
    return new State(getRamdomPositions(), 0, 0, "is playing");
    }

    static ready() {
        return new State(
            [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],],0,0,"ready"
        );
        }
}



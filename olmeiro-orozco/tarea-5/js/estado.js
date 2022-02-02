import { getGridAleatorio } from "./helpers.js";

export class Estado {
  grid;
  estado;
  
  constructor(grid, estado) {
    this.grid = grid;
    this.estado = estado;
  }

  static listo() {
    return new Estado(
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      "listo"
    );
  }

  static iniciar() {
    return new Estado(getGridAleatorio(), "jugando");
  }
}
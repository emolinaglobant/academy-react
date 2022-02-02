import { Caja } from "./caja.js";
import { Estado } from "./estado.js";
import { cambiarCajas, puzzleResuelto } from "./helpers.js";

export class Juego {
  estado;

  constructor(estado) {
    this.estado = estado;
    this.renderizarJuego();
  }

  static iniciar() {
    return new Juego(Estado.iniciar());
  }

  setEstado(nuevoEstado) {
    this.estado = { ...this.estado, ...nuevoEstado };
    this.renderizarJuego();
  }

  clickEnCaja = (caja) => {
    return () => {
      const cajasAlrededor = caja.getCajasAlrededor();
      const cajaBlanca = cajasAlrededor.find(
        (cajaAlrededor) =>
          this.estado.grid[cajaAlrededor.fila][cajaAlrededor.columna] === 0
      );

      if (cajaBlanca) {
        const nuevaGrid = [...this.estado.grid];
        cambiarCajas(nuevaGrid, caja, cajaBlanca);

        if (puzzleResuelto(nuevaGrid)) {
          this.setEstado({
            estado: "ganaste",
            grid: nuevaGrid,
          });
        } else {
          this.setEstado({
            grid: nuevaGrid,
          });
        }
      }
    };
  };

  renderizarJuego() {
    const { grid, estado } = this.estado;
    const nuevaGrid = document.createElement("section");

    nuevaGrid.className = "grilla";

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const boton = document.createElement("button");

        if (estado === "jugando") {
          boton.addEventListener("click", this.clickEnCaja(new Caja(j, i)));
        }
        boton.textContent = grid[i][j] === 0 ? "" : grid[i][j].toString();
        nuevaGrid.appendChild(boton);
      }
    }
    document.querySelector(".grilla").replaceWith(nuevaGrid);
    const iniciarJuego = document.getElementById("iniciarJuego");

    if (estado === "iniciar") iniciarJuego.textContent = "Jugar";
    if (estado === "jugando") iniciarJuego.textContent = "Nuevo juego";
    if (estado === "ganaste") iniciarJuego.textContent = "Jugar de nuevo";
  }
}
import { Caja } from "./caja.js";

const cambiarCajas = (grid, caja1, caja2) => {
  const temporal = grid[caja1.fila][caja1.columna];

  grid[caja1.fila][caja1.columna] = grid[caja2.fila][caja2.columna];
  grid[caja2.fila][caja2.columna] = temporal;
};

const getGridAleatorio = () => {
  let grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];

  let cajaBlanca = new Caja(3, 3);

  for (let i = 0; i < 1000; i++) {
    const siguienteCajaAleatoria = cajaBlanca.getCajaAleatoriaAlLado();
    cambiarCajas(grid, cajaBlanca, siguienteCajaAleatoria);
    cajaBlanca = siguienteCajaAleatoria;
  }

  if (puzzleResuelto(grid)) return getGridAleatorio();
  return grid;
};

const puzzleResuelto = (grid) => {
  return (
    grid[0][0] === 1 &&
    grid[0][1] === 2 &&
    grid[0][2] === 3 &&
    grid[0][3] === 4 &&
    grid[1][0] === 5 &&
    grid[1][1] === 6 &&
    grid[1][2] === 7 &&
    grid[1][3] === 8 &&
    grid[2][0] === 9 &&
    grid[2][1] === 10 &&
    grid[2][2] === 11 &&
    grid[2][3] === 12 &&
    grid[3][0] === 13 &&
    grid[3][1] === 14 &&
    grid[3][2] === 15 &&
    grid[3][3] === 0
  );
};

export { puzzleResuelto, getGridAleatorio, cambiarCajas };
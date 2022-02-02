export class Caja {
  columna;
  fila;

  constructor(columna, fila) {
    this.columna = columna;
    this.fila = fila;
  }

  getCajaArriba() {
    if (this.fila === 0) return null; //si la fila es cer0
    return new Caja(this.columna, this.fila - 1); //resto unidad en fila
  }

  getCajaDerecha() {
    if (this.columna === 3) return null; //si la columna es 3
    return new Caja(this.columna + 1, this.fila); //sumo unidad en columna
  }

  getCajaAbajo() {
    if (this.fila === 3) return null; //si la fila es 3
    return new Caja(this.columna, this.fila + 1); //sumo unidad en fila
  }

  getCajaIzquierda() {
    if (this.columna === 0) return null; //si la columna es cero;
    return new Caja(this.columna - 1, this.fila); // resto unidad en columna
  }

  getCajasAlrededor() {
    return [
      this.getCajaArriba(),
      this.getCajaDerecha(),
      this.getCajaAbajo(),
      this.getCajaIzquierda(),
    ].filter((box) => box !== null);
  }

  getCajaAleatoriaAlLado() {
    const siguienteCaja = this.getCajasAlrededor();
    return siguienteCaja[Math.floor(Math.random() * siguienteCaja.length)];
  }
}
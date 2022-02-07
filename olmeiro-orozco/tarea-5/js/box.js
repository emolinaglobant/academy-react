export class Box {
  column;
  row;

  constructor(column, row) {
    this.column = column;
    this.row = row;
  }

  getBoxUp() {
    if (this.row === 0) return null;
    return new Box(this.column, this.row - 1);
  }

  getBoxRight() {
    if (this.column === 3) return null;
    return new Box(this.column + 1, this.row);
  }

  getBoxBottom() {
    if (this.row === 3) return null;
    return new Box(this.column, this.row + 1);
  }

  getBoxLeft() {
    if (this.column === 0) return null;
    return new Box(this.column - 1, this.row);
  }

  getBoxAround() {
    return [
      this.getBoxUp(),
      this.getBoxRight(),
      this.getBoxBottom(),
      this.getBoxLeft(),
    ].filter((box) => box !== null);
  }

  getRandomNextBox() {
    const nextBox = this.getBoxAround();
    return nextBox[Math.floor(Math.random() * nextBox.length)];
  }
}
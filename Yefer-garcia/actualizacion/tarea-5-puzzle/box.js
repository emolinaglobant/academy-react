class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    getTopBox() {
      if (this.y === 0) return null;
      return new Box(this.x, this.y - 1);
    }
  
    getRightBox() {
      if (this.x === 3) return null;
      return new Box(this.x + 1, this.y);
    }
  
    getBottomBox() {
      if (this.y === 3) return null;
      return new Box(this.x, this.y + 1);
    }
  
    getLeftBox() {
      if (this.x === 0) return null;
      return new Box(this.x - 1, this.y);
    }
  
    getNextdoorBoxes() {
      return [
        this.getTopBox(),
        this.getRightBox(),
        this.getBottomBox(),
        this.getLeftBox(),
      ].filter((box) => box !== null);
    }
  
    getRandomNextdoorBox() {
      const nextdoorBoxes = this.getNextdoorBoxes();
      return nextdoorBoxes[Math.floor(Math.random() * nextdoorBoxes.length)];
    }
  }
export default Box  
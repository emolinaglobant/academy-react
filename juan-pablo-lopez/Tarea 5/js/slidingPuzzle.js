export default class SlidingPuzzle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getSliderTopPosition() {
        if (this.y === 0) return null;
        return new SlidingPuzzle(this.x, this.y - 1);
    }

    getSliderRightPosition() {
        if (this.x === 3) return null;
        return new SlidingPuzzle(this.x + 1, this.y);
    }

    getSliderBottomPosition() {
      if (this.y === 3) return null;
      return new SlidingPuzzle(this.x, this.y + 1);
    }
  
    getSliderLeftPosition() {
      if (this.x === 0) return null;
      return new SlidingPuzzle(this.x - 1, this.y);
    }
  
    getAllSlidingItems() {
      return [
        this.getSliderTopPosition(),
        this.getSliderRightPosition(),
        this.getSliderBottomPosition(),
        this.getSliderLeftPosition(),
      ].filter((item) => item !== null);
    }
  
    getRamdomSlidingItems() {
      const allSlidingItems = this.getAllSlidingItems();
      return allSlidingItems[Math.floor(Math.random() * allSlidingItems.length)];
    }
  }

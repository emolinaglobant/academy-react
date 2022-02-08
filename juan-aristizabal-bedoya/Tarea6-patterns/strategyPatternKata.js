class Fly {
    move(unit) {
      unit.position += 10;
    }
  }
  
  class Walk {
    move(unit) {
      unit.position += 1;
    }
  }
  
  class Viking {
    constructor() {
      this.position = 0;
      this.moveBehavior = new Walk();
    }
    
    move() {
      this.moveBehavior.move(this);
    }
  }
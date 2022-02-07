class Fly {
    move(unit) {
      return unit + 10;
    }
  }
  
  class Walk {
    move(unit) {
      return unit + 1;
    }
  }
  
  class Viking {
    constructor() {
     this.position = 0;
     this.moveBehavior = new Walk();
    }
    
    move() {
      this.position = this.moveBehavior.move(this.position);
    }
  }
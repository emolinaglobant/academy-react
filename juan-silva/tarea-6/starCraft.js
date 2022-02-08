class Fly {
    move(unit) {
      unit+=10;
      return unit;
      
    }
  }
  
  class Walk {
    
    move(unit) {
      unit+=1;
      return unit;
    }
  }
  
  class Viking {
    constructor(position,moveBehavior) {
      this.position=position||0;
      this.moveBehavior=moveBehavior||new Walk();
    }
    
    move() {
      
        this.position = this.moveBehavior.move(this.position);  
    }
  }
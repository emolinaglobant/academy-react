//Strategy one
class Fly {
    move(unit) {
      unit.position += 10;
    }
  }
  
  //Strategy two
  class Walk {
    move(unit) {
      unit.position += 1;
    }
  }
  
  //Class context
    class Viking {
  
    position;
    moveBehavior;
  
    constructor() {
      this.position = 0;
      this.moveBehavior = new Walk();
    }
    
    move() {
      this.moveBehavior.move(this); // delegate behavior to strategy
    }
  }
  
  let viking = new Viking();
  viking.move();
  console.log("position walk: ",viking.position);
  viking.move();
  console.log("position walk: ",viking.position);
  //change behavior strategy
  viking.moveBehavior = new Fly();
  viking.move();
  console.log("position fly: ", viking.position);
  viking.move();
  console.log("position fly: ", viking.position);
  //change behavior strategy
  viking.moveBehavior = new Walk();
  viking.move();
  console.log("position walk: ", viking.position);
  
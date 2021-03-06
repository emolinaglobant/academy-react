class Fly {
  move(unit) {
    unit.position += 10;
  }
}

class Walk {
  move(unit) {
    unit.position++;
  }
}

class Viking {
  constructor(position, moveBehavior) {
    this.position = 0;
    this.moveBehavior = new Walk();
  }

  move() {
    this.moveBehavior.move(this);
  }
}

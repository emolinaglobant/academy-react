class Fly {
    move(unit) {
        return 10;
    }
}

class Walk {
    move(unit) {
        return 1;
    }
}

class Viking {
    constructor() {
        this.position = 0;
        this.moveBehavior = new Walk();
    }

    move() {
        return this.position += this.moveBehavior.move();
    }
}
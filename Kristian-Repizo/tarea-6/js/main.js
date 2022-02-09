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
        this.moveBehavior = new Walk();
        this.position = 0;
    }
    
    move() {
        return this.position = this.moveBehavior.move(this.position);
    }
}
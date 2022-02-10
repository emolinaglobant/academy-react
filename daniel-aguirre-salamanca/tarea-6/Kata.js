class Fly{
    move(unit){
        unit.position += 10;
    }
}
class Viking{
    constructor(){
        this.position = 0;
        this.moveBehaviour = new Walk();
    }
    move(){
        this.moveBehaviour.move(this);
    }
}
class Walk {
    move(unit){
        unit.position += 1;
    }
}

class Fly {
    move(unit) {
      unit+=10;
      return unit;
      
    }
  }
  
  class Walk {
    constructor(isWalking){
      this.isWalking=isWalking;
    }
    move(unit) {
      unit+=1;
      return unit;
    }
  }
  
  class Viking {
    constructor(position,moveBehavior) {
      this.position=position||0;
      this.moveBehavior=moveBehavior||new Walk(true);
    }
    
    move() {
      if(this.moveBehavior.isWalking==true ){
        
        this.position = this.moveBehavior.move(this.position);  
      }
        
        
      
      else{
        this.position = this.moveBehavior.move(this.position);
      }
      
    }
  }
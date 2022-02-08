package patterncraft.strategy
{
    import flash.display.Sprite;
    public class Vehicle extends Sprite
    {
        pubic var moveBehavior:IMoveVehicleBehavior;
        public function move(tweenVars:Object):void
        {
            moveBehavior.move(this, tweenVars);
        }
    }    
}
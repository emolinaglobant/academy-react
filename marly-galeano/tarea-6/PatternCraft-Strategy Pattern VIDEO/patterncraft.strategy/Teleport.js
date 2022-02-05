package patterncraft.strategy
{
    import com.greensock.TweenMax;
    public class Teleport implements IMoveVehicleBehavior
    {
        public function move(vehicle:Vehicle, tweenVars:Object):void {
            tweenVars.to(vehicle, 0, tweenVars)
        }
    }
}
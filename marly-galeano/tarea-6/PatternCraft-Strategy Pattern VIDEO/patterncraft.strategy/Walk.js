package patterncraft.strategy
{
    import com.greensock.TweenMax;
    public class Walk implements IMoveVehicleBehavior
    {
        public function move(vehicle:Vehicle, tweenVars:Object):void {
            tweenVars.bezierThrough = [
                (rotation:18),
                (rotation:-18),
                (rotation:18),
                (rotation:-18),
            ];
            TweenMax.to(vehicle, 3, tweenVars);
        }
    }
}
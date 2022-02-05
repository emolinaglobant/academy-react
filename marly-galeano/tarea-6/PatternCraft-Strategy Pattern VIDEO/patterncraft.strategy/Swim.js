package patterncraft.strategy
{
    import com.greensock.TweenMax;
    public class Swim implements IMoveVehicleBehavior
    {
        public function move(vehicle:Vehicle, tweenVars:Object):void {
            tweenVars.bezierThrough = [
                (scaleX:1.8, scaleY:1.8),
                (scaleX:1, scaleY:1),
                (scaleX:1, scaleY:1),
            ];
            TweenMax.to(vehicle, 3, tweenVars);
        }
    }
}
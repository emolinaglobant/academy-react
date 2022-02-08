package patterncraft.strategy
{
    import com.greensock.TweenMax;
    import com.greensock.easing.Quad;

    public class Fly implements IMoveVehicleBehavior
    {
        public function move(vehicle:Vehicle, tweenVars:Object):void
        {
            tweenVars.ease = Quad.easeInOut;
            TweenMax.to(vehicle, .5, tweenVars);
        }
    }
}
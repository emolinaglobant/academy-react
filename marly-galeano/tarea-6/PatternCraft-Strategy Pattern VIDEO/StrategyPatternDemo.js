import patterncraft.strategy.Fly;
import patterncraft.strategy.Swim;
import patterncraft.strategy.Teleport;
import patterncraft.strategy.Viking;
import patterncraft.strategy.Walk;

[SWF(backgroundColor="0xededed", frameRate="60")]
public class StrategyPatternDemo extends Sprite 
{
    private var viking:Viking;
    public function StrategyPatternDemo()
    {
        viking = new Viking();
        viking.moveBehavior = new Fly();
        
        viking.x = 100;
        viking.y = 100;

        addChild(viking);

        stage.addEventListener(MouseEvent.CLICK, onMouseClick);
        stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUp)
    }
    private function onKeyUp(event:KeyboardEvent):void
    {
        switch (event.keyCode)
        {
            case 49:
                viking.moveBehavior = new Fly();
                break;
            case 50:
                viking.moveBehavior = new Walk();
                break; 
            case 51:
                viking.moveBehavior = new Swim();
                break;
            case 52:
                viking.moveBehavior = new Teleport();
                break;
        }
    }
    private function onMouseClick(event:MouseEvent):void
    {
        var tweenVars:Object = (x:event.stageX, y:event.stageY, scale)
        this.viking.move(tweenVars);
    }
}

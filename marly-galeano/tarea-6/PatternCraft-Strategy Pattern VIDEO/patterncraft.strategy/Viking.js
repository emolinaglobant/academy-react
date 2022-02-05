package patterncraft.strategy
{
    public class Viking extends Vehicle
    {
        public function Viking()
        {
            graphics.beginFill(0xcc0000);
            graphics.drawRect(0, 0, 50, 15);
            graphics.endFill();
        }
    }
}
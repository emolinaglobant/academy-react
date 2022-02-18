import "./GameResume.css";
import { FixedContainer, Button, Card } from "@UI";

const GameResume = ({ message, onReset }) => {

  return (
    <FixedContainer>
      <Card className="game__resume">
        <h2>{message}</h2>
        <Button onClick={onReset}>Volver a jugar</Button>
      </Card>
    </FixedContainer>
  );
};

export default GameResume;

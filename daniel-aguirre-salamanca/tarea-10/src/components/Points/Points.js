import "./Points.css";
import { Card } from "@UI";

const Points = ({ points }) => {
  return (
    <article className="points">
      <Card>
        <h2>Puntos</h2>
        <p className="points__counter">{points}</p>
      </Card>
    </article>
  );
};

export default Points;

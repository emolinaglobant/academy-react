import "./Lifes.css";
import { converToHearts } from "@helpers";

const Lifes = ({ lifes }) => {
  return (
    <article className="lifes">
        <figure className="lifes__svgs">{converToHearts(lifes)}</figure>
    </article>
  );
};

export default Lifes;

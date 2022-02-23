import "./UI.css";

const Card = (props) => {
  let className = "card ";
  className += props.className ? props.className : "";
  return <section className={className}>{props.children}</section>;
};

export default Card;

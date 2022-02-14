import "./UI.css";

const FixedContainer = (props) => {
  return <article className="fixed__container">{props.children}</article>;
};

export default FixedContainer;

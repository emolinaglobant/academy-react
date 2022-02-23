import React, { useRef } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
const Create = ({ onCreate }) => {
  const todo = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(todo.current.value);
    todo.current.value = "";
  };
  return (
    <Card className="card--in-column">
      <h1>Create a new todo!</h1>
      <form className="create" onSubmit={handleSubmit}>
        <input type="text" ref={todo} placeholder="Todo" autoFocus />
        <section className="buttons">
          <Link to="/" className="nav__link nav__link--create">
            <i className="fa-solid fa-arrow-left" />
            &nbsp;Go back
          </Link>
          <Button>Create todo</Button>
        </section>
      </form>
    </Card>
  );
};

export default Create;

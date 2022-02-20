import React, { useRef } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todosSlice";

const Create = () => {
  const todoTitle = useRef();
  const todoDescription = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {name: todoTitle.current.value, description: todoDescription.current.value}
    dispatch(createTodo(newTodo));
    todoTitle.current.value = "";
    todoDescription.current.value = "";

  };
  return (
    <Card className="card--in-column">
      <h1>Create a new todo!</h1>
      <form className="create" onSubmit={handleSubmit}>
        <input type="text" ref={todoTitle} placeholder="Todo" autoFocus />
        <textarea rows="10"ref={todoDescription}  placeholder="Description"/>
        <section className="buttons">
          <Link to="/" className="nav__link nav__link--create"><i className="fa-solid fa-arrow-left" />&nbsp;Go back</Link>
          <Button>Create todo</Button>
        </section>
      </form>
    </Card>
  );
};

export default Create;

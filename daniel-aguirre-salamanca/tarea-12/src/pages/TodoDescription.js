import React from "react";
import Card from "../components/UI/Card";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const TodoDescription = () => {
  const todos = useSelector(state => state.todos.value);
  const { id } = useParams();
  const currentTodo = todos[id];
  return (
    <Card className="card--in-column">
      <Link to="/" className="nav__link nav__link--create nav__link--todoDescription"><i className="fa-solid fa-arrow-left" />&nbsp;Go back</Link>
      <h1>{currentTodo.name}</h1>
      <p>{currentTodo.description}</p>
    </Card>
  );
};

export default TodoDescription;

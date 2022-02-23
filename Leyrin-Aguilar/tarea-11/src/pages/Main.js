import React from "react";
import TodoList from "../components/TodoList";
import Card from "../components/UI/Card";
const Main = ({ data, onDelete }) => {
  return (
    <Card className="card--in-column">
      <h1>Welcome to your Todos!</h1>
      <TodoList data={data} onDelete={onDelete} />
    </Card>
  );
};

export default Main;

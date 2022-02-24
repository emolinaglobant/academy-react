import React from "react";
import TodoList from "../components/TodoList";
import Card from "../components/UI/Card";
const Main = () => {
  return (
    <Card className="card--in-column">
      <h1>Welcome to your Todos!</h1>
      <TodoList  />
    </Card>
  );
};

export default Main;

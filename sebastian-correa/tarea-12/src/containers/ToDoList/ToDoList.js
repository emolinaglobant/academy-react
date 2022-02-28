import React from "react";
import { useSelector } from "react-redux";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
    const todos = useSelector(state => state.todos);

    if (!!todos) {
        return todos.map((todo, index) => {
          return <ToDo key={index} todo={todo} />;
        });
    } else {
        return "";
    }
};

export default ToDoList;

import React from "react";
import ToDo from "../ToDo/ToDo";

const ToDoList = ({ todos, updateToDoStatus }) => {
    if (!!todos) {
        return todos.map((todo, index) => {
          return <ToDo key={index} todo={todo} updateToDoStatus={updateToDoStatus} />;
        });
    } else {
        return "";
    }
};

export default ToDoList;

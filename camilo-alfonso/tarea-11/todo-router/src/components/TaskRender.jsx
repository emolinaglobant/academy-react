import React from "react";
import { useParams } from "react-router-dom";

import "../assets/css/taskRender.css";

const TaskRender = () => {
  let { id } = useParams();

  return (
    <main className="taskRender">
      <h1>
        Task ID:
        <br />
        {id}
      </h1>
    </main>
  );
};

export default TaskRender;

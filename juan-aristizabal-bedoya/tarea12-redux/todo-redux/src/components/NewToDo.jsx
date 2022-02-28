import React from "react";
import "./Form.css";

const NewToDo = ({ id, name }) => {
  return (
    <section className="global-form-container">
      <span>Task #{id}</span>
      <h2>{name}</h2>
    </section>
  );
};

export default NewToDo;

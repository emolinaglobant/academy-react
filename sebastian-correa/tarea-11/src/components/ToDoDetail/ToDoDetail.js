import "./ToDoDetail.css";
import React from "react";
import { useParams } from 'react-router-dom';

const ToDoDetail = ({todos}) => {
  let { id } = useParams();
  const statusClasses = `row-value ${todos[id-1].priority}-priority`;
  console.log(statusClasses);

  return (
    <section>
      <h2>Detail</h2>
      <section className="detail-row">
        <p className="row-title">Id:</p>
        <p className="row-value">{id}</p>
      </section>
      <section className="detail-row">
        <p className="row-title">Name:</p>
        <p className="row-value">{todos[id-1].name}</p>
      </section>
      <section className="detail-row">
        <p className="row-title">Priority:</p>
        <p className={statusClasses}>{todos[id-1].priority.charAt(0).toUpperCase() + todos[id-1].priority.slice(1)}</p>
      </section>
      <section className="detail-row">
        <p className="row-title">Status:</p>
        <p className="row-value">{todos[id-1].status ? "Completed": "Unfinished"}</p>
      </section>
    </section>
  );
};

export default ToDoDetail;

import React from "react";
import './taskView.scss'

function TaskView({ id, name, description }) {
    return (
        <section className="taskView">
            <span>{id}</span>
            <h2>{name}</h2>
            <p>{description}</p>
        </section>
    )
}

export default TaskView;
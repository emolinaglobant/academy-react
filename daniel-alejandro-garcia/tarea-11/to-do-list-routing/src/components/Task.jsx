import React from 'react'
import { Link, useParams } from "react-router-dom";

function Task({name}) {
  const {id} = useParams();
  return (
    <div>
        <h1>{name[id].nameTask}</h1>
        <button><Link to="/">Menu</Link></button>
    </div>
  )
}

export default Task;
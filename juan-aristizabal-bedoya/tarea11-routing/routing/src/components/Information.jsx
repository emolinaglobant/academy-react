import React from "react";

const Information = ({ list }) => {
  return (
    <article className="center-text">
      <h1>this is a ToDo list</h1>
      <ul>
        <li className="navbar-li">- {list}</li>
      </ul>
    </article>
  );
};

export default Information;

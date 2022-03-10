import React from "react";
import "./index.css";

export const Title = ({ text }) => {
  return (
    <h1 aria-label="page title" className="title-style">
      {text}
    </h1>
  );
};

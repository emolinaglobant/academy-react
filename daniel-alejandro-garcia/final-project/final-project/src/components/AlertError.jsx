import React from "react";
import "../css/AlertErrorStyle.css";

function AlertError({ error }) {
  return <div className="errorRegister">{error}</div>;
}

export default AlertError;

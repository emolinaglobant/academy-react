import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "animate.css";

export const Table = ({ id }) => {
  const navigate = useNavigate();

  const goToTable = () => {
    navigate(`/table-details`);
  };
  return (
    <section
      aria-label="choice of table to serve"
      className="table-section animate__heartBeat"
      onClick={goToTable}
    >
      <FontAwesomeIcon icon={faUtensils} className="table-icon" />
      <h4 className="font-table-section">Table {id}</h4>
    </section>
  );
};

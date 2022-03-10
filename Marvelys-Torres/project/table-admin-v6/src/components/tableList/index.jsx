import React from "react";
import { Table } from "../table";
import "./index.css";

export const TableList = ({ tables }) => {
  return (
    <main className="table-main">
      {tables.map(({ id }) => (
        <Table key={id} id={id} />
      ))}
    </main>
  );
};

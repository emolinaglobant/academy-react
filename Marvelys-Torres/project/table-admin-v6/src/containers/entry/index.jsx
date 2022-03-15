import React from "react";
import { TableList } from "../../components/tableList";
import { Title } from "../../components/title";
import "./index.css";

const tables = [
  {
    id: 1,
  },
];

export const Entry = () => {
  return (
    <section aria-label="application main entrance">
      <Title text="Welcome" />
      <h3 aria-label="start attention message" className="entry-message">
        To start attention please click on the table
      </h3>
      <TableList aria-label="chosen table" tables={tables} />
    </section>
  );
};

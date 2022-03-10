import React from "react";
import { Spinner } from "react-bootstrap";
import "../css/SpinnerLoadingStyle.css";

function SpinnerLoading() {
  return (
    <section className="spinnerLoading">
      <Spinner animation="border" variant="primary" />
    </section>
  );
}

export default SpinnerLoading;

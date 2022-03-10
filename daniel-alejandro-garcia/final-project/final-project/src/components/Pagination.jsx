import React from "react";
import "../css/PaginationStyle.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <section className="buttonsPagination mt-4">
      {gotoPrevPage ? (
        <button className="button-prev" onClick={gotoPrevPage}>
          <AiOutlineArrowLeft /> Prev
        </button>
      ) : (
        <button className="button-prev" size="lg" variant="danger" disabled>
          <AiOutlineArrowLeft /> Prev
        </button>
      )}
      {gotoNextPage ? (
        <button
          className="button-next"
          size="lg"
          variant="success"
          onClick={gotoNextPage}
        >
          Next <AiOutlineArrowRight />
        </button>
      ) : (
        <button className="button-prev" size="lg" variant="success" disabled>
          <AiOutlineArrowLeft /> Prev
        </button>
      )}
    </section>
  );
}

export default Pagination;

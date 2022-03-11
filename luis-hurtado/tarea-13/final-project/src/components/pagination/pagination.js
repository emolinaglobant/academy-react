import ReactPaginate from "react-paginate";
import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import { Pages } from "./styles";

export const Pagination = () => {
  const { pageNumber, setPageNumber } = useContext(CharacterContext);

  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  return (
    <Pages>
      <ReactPaginate
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        onPageChange={pageChange}
        pageCount={42}
        pageClassName="page"
        containerClassName="pageContainer"
        previousClassName="prevBtn"
        nextClassName="nextBtn"
        activeClassName="activePage"
        breakClassName="morePages"
      />
    </Pages>
  );
};

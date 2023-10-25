import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./Pagination.module.css";
import PaginationButton from "./PaginationButton";

function Pagination(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const lastPage = Math.ceil(props.count / searchParams.get("_limit"));
  const currentPage = parseInt(searchParams.get("_page"));

  // Determine the range of pages to display
  const numButtonsToShow = 3; // Adjust this value to change the number of buttons to display.
  let startPage = Math.max(1, currentPage - Math.floor(numButtonsToShow / 2));
  let endPage = Math.min(lastPage, startPage + numButtonsToShow - 1);

  // Ensure that there are at least numButtonsToShow pages shown
  if (endPage - startPage + 1 < numButtonsToShow) {
    startPage = Math.max(1, endPage - numButtonsToShow + 1);
  }

  // Generate an array of page numbers in the specified range
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className={classes.pagination}>
      <PaginationButton
        title="Prev"
        disabled={currentPage === 1}
        page={currentPage - 1}
      />

      {startPage > 1 && <PaginationButton title="1" page={1} />}
      {startPage > 2 && <span className="heading-4">...</span>}

      {pageNumbers.map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          title={pageNumber.toString()}
          disabled={currentPage === pageNumber}
          page={pageNumber}
        />
      ))}

      {endPage < lastPage - 1 && <span className="heading-4">...</span>}

      {endPage < lastPage && (
        <PaginationButton title={lastPage.toString()} page={lastPage} />
      )}

      <PaginationButton
        title="Next"
        disabled={currentPage === lastPage}
        page={currentPage + 1}
      />
    </div>
  );
}

export default Pagination;

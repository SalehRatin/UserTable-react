import React from "react";

const Pagination = ({
  handlePrevPage,
  pageCount,
  currentPage,
  handleClickPage,
  handleNextPage,
}) => {
  return (
    <ul className={"home__pagination"}>
      <li onClick={handlePrevPage}>Previos</li>
      {"*"
        .repeat(pageCount)
        .split("")
        .map((item, index) => index)
        .filter((item, index) => {
          return Math.abs(index - currentPage) < 4;
        })
        .map((item, index) => (
          <li
            key={index}
            className={item + 1 === currentPage ? "item-active" : ""}
            onClick={() => handleClickPage(item)}
          >
            {item + 1}
          </li>
        ))}
      <li onClick={handleNextPage}>Next</li>
    </ul>
  );
};

export default Pagination;

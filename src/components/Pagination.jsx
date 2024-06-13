import React from "react";

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPage = Math.ceil(blogs.length / pageSize);

  const renderPagination = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activerpagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  console.log(totalPage);
  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li className="">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className=""
        >
          Previous
        </button>
      </li>
      <div className="flex gap-1">{renderPagination()}</div>
      <li className="">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
          className=""
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Pagination.css";
import { useEffect } from "react";

const Pagination = ({ setItems, itemsRef, itemsPerPage }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageCount = Math.ceil(itemsRef.length / itemsPerPage);

  const circlesArray = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  useEffect(() => {
    const start = 0 + (itemsPerPage - 1) * (pageNumber - 1);
    const end = itemsPerPage + (itemsPerPage - 1) * (pageNumber - 1);
    console.log(start, end);
    setItems(itemsRef.slice(start, end));
  }, [pageNumber]);

  return (
    <>
      {pageCount > 1 && (
        <div className="container-pagination">
          {circlesArray.map((circle, index) => (
            <div
              className={`pagination-circle ${
                pageNumber === index + 1 ? "pagination-circle-active" : ""
              }`}
              key={index}
              onClick={() => setPageNumber(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Pagination;

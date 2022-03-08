import React from "react";

export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevios = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="m-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevios}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

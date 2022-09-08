import React from "react";

const BtnPagination = ({ total, registro, prevPag, nextPag }) => {
  return (
    <>
      <button
        className="btn btn-dark btn-outline-danger  me-3  "
        disabled={registro === 0 ? true : false}
        onClick={prevPag}
      >
        Prev
      </button>
      <button
        className="btn btn-dark btn-outline-danger"
        disabled={total - registro <= 5 ? true : false}
        onClick={nextPag}
      >
        Next
      </button>
    </>
  );
};

export default BtnPagination;

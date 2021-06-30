import React from "react";

function Pagination({totalPages, page, setPage}) {
  return (
    <div className="Pagination">
      <button onClick={() => setPage((prev) => prev - 1)}>prev</button>
      <input
        type="text"
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
      />
      {[...Array(totalPages)].map((button, index) => (
        <button onClick={() => setPage(index + 1)} key={index + 1}>
          page {index + 1}
        </button>
      ))}
      <button onClick={() => setPage((prev) => prev + 1)}>next</button>
    </div>
  );
}

export default Pagination;

import React, { useState } from "react";
import "../styles/pagination.css";
import Galleta from "../Pages/Galleta";
import Pokedex from "../Pages/Pokedex";
import Clima from "../Pages/Clima";
import Usuarios from "../Pages/Usuarios";
import "../styles/portafolio.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [<Galleta />, <Pokedex />, <Clima />, <Usuarios />];
  const totalPages = pages.length;
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPages / 3); i++) {
    pageNumber.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  const lastIndex = currentPage * 3;
  const firstIndex = lastIndex - 3;

  return (
    <div className="pagination">
    <div className="Pagination-container">
      <div className="contenedor__portafolio">
        {pages.slice(firstIndex, lastIndex)}
      </div>
      <nav className="pagination">
        {currentPage > 1 ? (
          <button
            className={`pagination-previous ${
              currentPage === 1 ? "is-disable" : ""
            }`}
            onClick={onPreviusPage}
          >
            {" "}
            <img
              className="pagination-previous-icon"
              src="https://cdn-icons-png.flaticon.com/128/8914/8914615.png"
              alt=""
            />{" "}
          </button>
        ) : (
          <div className="div-icon"></div>
        )}

        <ul className="pagination-list">
          {pageNumber.map((noPage) => (
            <li className="pagination-list-li">
              <button
                className={`pagination-link ${
                  noPage === currentPage ? "is-current" : ""
                }`}
                onClick={() => onSpecificPage(noPage)}
              >
                {noPage}
              </button>
            </li>
          ))}
        </ul>
        {currentPage < Math.ceil(totalPages / 3) ? (
          <button className="pagination-next" onClick={onNextPage}>
            {" "}
            <img
              className="pagination-previous-icon-next"
              src="https://cdn-icons-png.flaticon.com/128/8914/8914615.png"
              alt=""
            />{" "}
          </button>
        ) : (
          <div className="div-icon"></div>
        )}
      </nav>
    </div>
    </div>
  );
};

export default Pagination;

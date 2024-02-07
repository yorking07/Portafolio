import React from "react";
import "../styles/nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <span>
          DRAOB
        </span>

        <span className="Logos-de-contacto">
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              className="nav__logotipo__contacto"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
              alt=""
            />{" "}
          </a>
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              className="nav__logotipo__contacto"
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt=""
            />{" "}
          </a>
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              className="nav__logotipo__contacto"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
              alt=""
            />{" "}
          </a>
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              className="nav__logotipo__contacto"
              src="https://cdn-icons-png.flaticon.com/128/2504/2504957.png"
              alt=""
            />{" "}
          </a>
        </span>
      </nav>
    </>
  );
};

export default Nav;



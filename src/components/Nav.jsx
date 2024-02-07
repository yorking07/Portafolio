import React from "react";
import "../styles/nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        
          <section className="logotipo-container">
            <img className="logotipo" src="https://cdn-icons-png.flaticon.com/128/3621/3621580.png"  />
          <span className="name">
              DRAOB
          </span>
        </section>

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
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jorgek070604@gmail.com" target="_blank" className="logo-de-contacto">
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



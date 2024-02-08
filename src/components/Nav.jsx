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
              src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
              alt=""
            />{" "}
          </a>
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              className="nav__logotipo__contacto"
              src="https://cdn-icons-png.flaticon.com/128/3992/3992560.png"
              alt=""
            />{" "}
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jorgek070604@gmail.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              className="nav__logotipo__contacto"
              src="https://cdn-icons-png.freepik.com/256/542/542689.png?ga=GA1.1.325983082.1697844930&semt=ais"
              alt=""
            />{" "}
          </a>
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              className="nav__logotipo__contacto"
              src="https://cdn-icons-png.flaticon.com/128/1384/1384039.png"
              alt=""
            />{" "}
          </a>
        </span>
        
      </nav>
    </>
  );
};

export default Nav;



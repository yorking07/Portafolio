import React from "react";
import "../styles/nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <img
          className="logotipo"
          src="https://c8.alamy.com/compes/2edwr2t/plantilla-de-logotipo-de-la-letra-j-monnogram-delicado-diseno-floral-logotipo-personal-diseno-vectorial-2edwr2t.jpg"
          alt=""
        />

        <span className="Logos-de-contacto">
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              
              src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
              alt=""
            />{" "}
          </a>
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt=""
            />{" "}
          </a>
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
              alt=""
            />{" "}
          </a>
          <a href="https://www.google.com" target="_blank" className="logo-de-contacto">
            {" "}
            <img
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



import React from "react";

const Galleta = () => {
  return (
    <article className="portafolio__article">
      <section className="portafolio__section1">
        <h2 className="portafolio__name">Pokedex</h2>
        <img
          className="portafolio__imagen"
          src="https://cdn-icons-png.flaticon.com/128/287/287221.png"
          alt=""
        />
      </section>
      <section className="portafolio__setcion2">
        <ul className="portafolio__ul">
          <li className="portafolio__li">
            <span className="portafolio__label">Tecnologia usada </span>
            <span className="portafolio__value"> React.js + Vite </span>
          </li>
          <li className="portafolio__li">
            <span className="portafolio__label">Objetivos</span>
            <span className="portafolio__value">Paginacion</span>
          </li>
        </ul>
        <a
          className="portafolio__desplegable"
          href="https://pokedex-page-xi.vercel.app/"
          target="_blank"
        >
          <img
            className="portafolio__icono"
            src="https://cdn-icons-png.flaticon.com/128/3113/3113022.png"
            alt=""
          />
        </a>
      </section>
    </article>
  );
};

export default Galleta;

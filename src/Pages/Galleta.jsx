import React from "react";
/*
Link del repositorio: https://github.com/yorking07/Galleta-de-la-fortuna.git 

Link desplegable Vercel: https://galleta-de-la-fortuna-five.vercel.app/ 
*/
const Galleta = () => {
  return (
    <article className="portafolio__article">
      <section className="portafolio__section1">
        <h2 className="portafolio__name">Fortuna</h2>
        <img
          className="portafolio__imagen"
          src="https://cdn-icons-png.flaticon.com/128/1471/1471406.png"
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
            <span className="portafolio__label">Objetivos </span>
            <span className="portafolio__value"> Aleatoriedad </span>
          </li>
        </ul>
        <a
          className="portafolio__desplegable"
          href="https://galleta-de-la-fortuna-five.vercel.app/"
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

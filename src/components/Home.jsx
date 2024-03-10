import React from "react";
import "../App.css";
import "../styles/home.css";
import Footer from "./Footer";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home">
      <article className="contenedor__home">
        <section className="Title">Desarrollador Web Full Stack</section>
        <section className="home__section">
          <span className="home__li__parrafo">
            Hola, mi nombre es Jorge Manuel Cantillo, Egresado del programa de
            desarrollo web y ciencias de la computación de la academía mexicana
            "Academlo" y actualmente estudiante de Ingenieria Electronica, A
            continuacion les mostrare mi portafolio
          </span>

          <span className="home__image">
            <img
              className="image__home"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pVHMsd8My9jDptfjGQSMgt-7JAa8gwRvww&usqp=CAU"
              alt=""
            />
          </span>
        </section>
        <section>
          <Footer />
        </section>
      </article>
      <Skills/>
    </div>
  );
};

export default Home;

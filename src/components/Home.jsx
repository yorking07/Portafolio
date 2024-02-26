import React from "react";
import "../App.css";
import "../styles/home.css";
import "../styles/skills.css";
import Footer from "./Footer";

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
      <article className="skills">
        <section>
          <span className="skills__span">Trabajo con los siguientes lenguajes informaticos : </span>
          <ul className="skills__ul">
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img
                  className="skills__image"
                  src="https://cdn-icons-png.flaticon.com/128/732/732212.png"
                  alt=""
                />{" "}
              </span>{" "}
              <span>HTML5</span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img
                  className="skills__image"
                  src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                  alt=""
                />{" "}
              </span>{" "}
              <span>CSS</span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img
                  className="skills__image"
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                  alt=""
                />{" "}
              </span>{" "}
              <span>JavaScript</span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img
                  className="skills__image"
                  src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
                  alt=""
                />{" "}
              </span>{" "}
              <span>Node.js</span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img
                  className="skills__image"
                  src="https://cdn-icons-png.freepik.com/128/3334/3334886.png?ga=GA1.1.325983082.1697844930&semt=ais"
                  alt=""
                />{" "}
              </span>{" "}
              <span>React.js</span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img
                  className="skills__image"
                  src="https://cdn-icons-png.freepik.com/128/5968/5968381.png?ga=GA1.1.325983082.1697844930&semt=ais"
                  alt=""
                />{" "}
              </span>{" "}
              <span>TypeScript</span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img
                  className="skills__image"
                  src="https://cdn-icons-png.freepik.com/128/5968/5968342.png?ga=GA1.1.325983082.1697844930&semt=ais"
                  alt=""
                />{" "}
              </span>{" "}
              <span>Postgres SQL</span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img
                  className="skills__image"
                  src="https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_alt_macos_bigsur_icon_189814.png"
                  alt=""
                />{" "}
              </span>{" "}
              <span>Postman</span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img className="skills__image" src="" alt="" />{" "}
              </span>{" "}
              <span></span>{" "}
            </li>
            <li className="skillls__li">
              {" "}
              <span>
                {" "}
                <img className="skills__image" src="" alt="" />{" "}
              </span>{" "}
              <span></span>{" "}
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Home;

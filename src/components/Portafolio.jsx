import React from "react";
import "../styles/portafolio.css";
import Galleta from "../Pages/Galleta";
import Pokedex from "../Pages/Pokedex";
import Clima from "../Pages/Clima"
import Usuarios from "../Pages/Usuarios"

const Portafolio = () => {
  return (
    <div className="contenedor__portafolio">
      <Galleta/>
      <Pokedex/>
      <Clima/>
      <Usuarios/>
    </div>
  );
};

export default Portafolio;

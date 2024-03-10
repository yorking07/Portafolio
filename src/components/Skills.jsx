import React, { useEffect } from "react";
import "../styles/skills.css";

const Skills = () => {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <article className="logos">
      <section className="logos-slide">
        <img
          className="logos-slide-img"
          src="https://cdn-icons-png.flaticon.com/128/1/1492.png"
          alt=""
        />
        <img
          className="logos-slide-img"
          src="https://cdn-icons-png.flaticon.com/128/11927/11927312.png"
          alt=""
        />
        <img
          className="logos-slide-img"
          src="https://cdn-icons-png.flaticon.com/128/9496/9496648.png"
          alt=""
        />
        <img
          className="logos-slide-img"
          src="https://www.shareicon.net/download/2016/06/19/603784_nodejs_512x512.png"
          alt=""
        />
        <img
          className="logos-slide-img"
          src="https://img.icons8.com/?size=80&id=0Da6k7SMq0hs&format=png"
          alt=""
        />
        <img
          className="logos-slide-img"
          src="https://img.icons8.com/?size=50&id=cHBUT9SmrD2V&format=png"
          alt=""
        />
        <img
          className="logos-slide-img"
          src="https://img.icons8.com/?size=50&id=36440&format=png"
          alt=""
        />
        <img
          className="logos-slide-img"
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postman-512.png"
          alt=""
        />
        
      </section>
    </article>
  );
};

export default Skills;

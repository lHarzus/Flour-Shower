import React from "react";
import group from "../../images/group-icon.png";
import camera from "../../images/camera-icon.png";
import mail from "../../images/mail-icon.png";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <div className="info-grid">
      <div className="info">
        <img src={group}></img>
        <h2>Quem Somos</h2>
        <p>
          Sabemos o quão importante é trabalhar com boas pessoas. Orgulhamo-nos
          em ser éticos, educados e trabalhadores.
        </p>
        <Link to="/aboutus" className="btn btn-bottom">
          Sobre Nós
        </Link>
      </div>
      <div className="info">
        <img src={camera}></img>
        <h2>Galeria</h2>
        <p>
          Visite a nossa galeria para ficar a par de alguns dos nossos produtos
          disponíveis que temos para lhe oferecer!
        </p>
        <Link to="/galeria" className="btn btn-bottom">
          Galeria
        </Link>
      </div>
      <div className="info">
        <img src={mail}></img>
        <h2>Fale Connosco</h2>
        <p>
          Adorávamos saber a tua opinião. Expões as tuas questões, ideias ou
          comentários. Até já!
        </p>
        <Link to="/contactos" className="btn btn-bottom">
          Contactos
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import group from "../../images/group-icon.png";
import camera from "../../images/camera-icon.png";
import mail from "../../images/mail-icon.png";

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
        <button className="btn btn-bottom">Sobre nós</button>
      </div>
      <div className="info">
        <img src={camera}></img>
        <h2>Galeria</h2>
        <p>
          Visite a nossa galeria para ficar a par de alguns dos nossos produtos
          disponíveis que temos para lhe oferecer!
        </p>
        <button className="btn btn-bottom">Galeria</button>
      </div>
      <div className="info">
        <img src={mail}></img>
        <h2>Fale Connosco</h2>
        <p>
          Adorávamos saber a tua opinião. Expões as tuas questões, ideias ou
          comentários. Até já!
        </p>
        <button className="btn btn-bottom">Contactos</button>
      </div>
    </div>
  );
};

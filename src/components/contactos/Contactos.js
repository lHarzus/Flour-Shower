import React from "react";
import PropTypes from "prop-types";
import { changePath } from "../../actions/redux";
import { connect } from "react-redux";
import spike from "../../images/spike.png";
import Email from "../encomendas/Email";

const Contactos = ({ changePath }) => {
  changePath(window.location.pathname);
  return (
    <div>
      <div className="contactos-title">
        <h2>Contactos</h2>
      </div>
      <div className="contactos-image">
        <img className="teste" src={spike}></img>
      </div>
      <div className="contactos-body">
        <div className="contactos-item">
          <h3>Contacto</h3>
          <h4>TELEFONE:</h4>
          <p>+325 253 415 235</p>
          <h4>EMAIL:</h4>
          <p>cm.flourshower@gmail.com</p>
          <h4>MORADA:</h4>
          <p>Av. dos Combatentes da Grande Guerra, 57</p>
          <p>2400-546 Leiria</p>
          <p>Portugal</p>
        </div>
        <div className="contactos-item">
          <h3>Horário</h3>
          <p>Aberto todos os dias</p>
          <p>07:00 às 22:00*</p>
          <p>*Nas épocas festivas o hjorário poderá ser diferente</p>
        </div>
        <div className="contactos-item">
          <Email title="Fale connosco" content="Mensagem" bg={"secondary"} />
        </div>
      </div>
    </div>
  );
};

Contactos.propTypes = {
  changePath: PropTypes.func.isRequired,
};

export default connect(null, { changePath })(Contactos);

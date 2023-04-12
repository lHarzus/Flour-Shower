import React from "react";
import PropTypes from "prop-types";
import { changePath } from "../../actions/redux";
import { connect } from "react-redux";

const Encomenda = ({ changePath, title, content, bg }) => {
  changePath(window.location.pathname);
  return (
    <div
      className={
        bg === "primary" ? "encomenda primary" : "encomenda secondary"
      }>
      <h1>{title}</h1>
      <form
        action="https://formsubmit.co/9c350b57b619742ced7d762a1e48b8a3"
        method="POST">
        <input type="text" name="name" placeholder="Nome *" required />
        <input type="email" name="Email" placeholder="E-mail *" required />
        <input type="text" name="assunto" placeholder="Assunto" />
        <textarea name="message" placeholder={content} required></textarea>
        <button className={bg === "primary" ? "btn btn-reverse" : "btn"}>
          ENVIAR
        </button>
      </form>
    </div>
  );
};

Encomenda.propTypes = {
  changePath: PropTypes.func.isRequired,
};

export default connect(null, { changePath })(Encomenda);

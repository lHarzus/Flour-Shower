import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Navbar = ({ redux: { path } }) => {
  const [visible, setVisible] = useState("true");
  const toggleVisible = () => {
    setVisible(!visible);
  };
  console.log(visible);
  return (
    <div className="nav">
      <div className="visible">
        <i
          className={visible ? "bi bi-list menu" : "bi bi-list menu rotate"}
          onClick={() => toggleVisible()}
        />
      </div>
      <div className={visible ? "navbar isvisible" : "navbar"}>
        <div>
          <Link to="/" className={path === "/" ? "selected" : ""}>
            Início
          </Link>
        </div>
        <div className="invisible">
          <i className="bi bi-dot dot"></i>
        </div>
        <div>
          <Link to="/aboutus" className={path === "/aboutus" ? "selected" : ""}>
            SOBRE NÓS
          </Link>
        </div>
        <div className="invisible">
          <i className="bi bi-dot dot"></i>
        </div>
        <div>
          <Link to="/blog" className={path === "/blog" ? "selected" : ""}>
            blog
          </Link>
        </div>
        <div className="invisible">
          <i className="bi bi-dot dot"></i>
        </div>
        <div>
          <Link to="/galeria" className={path === "/galeria" ? "selected" : ""}>
            galeria
          </Link>
        </div>
        <div className="invisible">
          <i className="bi bi-dot dot"></i>
        </div>
        <div>
          <Link
            to="/encomendas"
            className={path === "/encomendas" ? "selected" : ""}>
            encomendas
          </Link>
        </div>
        <div className="invisible">
          <i className="bi bi-dot dot"></i>
        </div>
        <div>
          <Link
            to="/contactos"
            className={path === "/contactos" ? "selected" : ""}>
            contactos
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  redux: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  redux: state.redux,
});

export default connect(mapStateToProps)(Navbar);

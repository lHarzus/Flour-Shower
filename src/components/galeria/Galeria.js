import React, { useState } from "react";
import PropTypes from "prop-types";
import { changePath } from "../../actions/redux";
import { getGaleria } from "../../actions/redux";
import { connect } from "react-redux";
import { Item } from "./Item";

const Galeria = ({ galeria, changePath, getGaleria }) => {
  useState(() => {
    changePath(window.location.pathname);
    getGaleria();
  }, []);
  console.log(galeria);
  return (
    <div className="galeria">
      {galeria.map(item => (
        <Item item={item} />
      ))}
    </div>
  );
};

Galeria.propTypes = {
  galeria: PropTypes.object.isRequired,
  changePath: PropTypes.func.isRequired,
  getGaleria: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  galeria: state.redux.galeria,
});

export default connect(mapStateToProps, { changePath, getGaleria })(Galeria);

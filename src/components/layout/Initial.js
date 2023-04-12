import React from "react";
import { Maps } from "./Maps";
import { Info } from "./Info";
import { InfoBlog } from "./InfoBlog";
import { Testemunhos } from "./Testemunhos";
import { Album } from "./Album";
import { changePath } from "../../actions/redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Initial = ({ changePath }) => {
  changePath(window.location.pathname);
  return (
    <div>
      <Album />
      <Info />
      <InfoBlog />
      <Testemunhos />
      <Maps />
    </div>
  );
};

Initial.propTypes = {
  changePath: PropTypes.func.isRequired,
};

export default connect(null, { changePath })(Initial);

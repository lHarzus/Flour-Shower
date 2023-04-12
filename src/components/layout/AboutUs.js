import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changePath } from "../../actions/redux";
import drip from "../../images/drip.png";
import castelo from "../../images/castelo.png";

const AboutUs = ({ changePath }) => {
  changePath(window.location.pathname);
  return (
    <Fragment>
      <img className="drip" src={drip} />

      <div className="aboutus">
        <h1>Sobre nós</h1>
        <div className="aboutus-info">
          <img src={castelo}></img>
          <div className="text">
            <p>
              A Flour Shower surgiu em 2019 no centro histórico da cidade de
              Leiria.
            </p>
            <p>
              Aliando rigorosos processos de fabrico, tecnologia adequada e
              actual, uma criteriosa selecção de todos os ingredientes, e
              inspirando-se em receitas tradicionais garantindo assim, a
              qualidade dos seus produtos e a essência dos sabores
            </p>
            <p>
              A Flour Shower conta com a dedicação de uma equipa dinâmica e
              competente, centrada em encontrar a melhor solução para cada um
              dos seus clientes, o que a tornou numa empresa de refeência do seu
              sector
            </p>
            <p>
              A qualidade, o serviço e a inovação são valores essenciais, Só
              assim somos capazes de responde às necessidades, espectativas e
              exigências dos nossos parceiros nesta trajectória de sucesso
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AboutUs.propTypes = {
  changePath: PropTypes.func.isRequired,
};

export default connect(null, { changePath })(AboutUs);

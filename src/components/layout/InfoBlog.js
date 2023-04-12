import React from "react";
import donut from "../../images/donut.png";

export const InfoBlog = () => {
  return (
    <div className="info-grid info-grid-reverse">
      <div className="info">
        <h3>Já conhece o nosso blog ? </h3>
        <p className="info-p">
          Visite o nosso blog, onde apresentamos pasteleiros e cozinheiros a
          confecionar receitas e a partilhar as suas experincias culinárias, e
          algumas dicas para fazer em sua casa
        </p>
        <button className="btn btn-reverse">Blog</button>
      </div>
      <div className="image">
        <img src={donut}></img>
      </div>
    </div>
  );
};

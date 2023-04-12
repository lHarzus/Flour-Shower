import React, { Fragment } from "react";

export const Portais = () => {
  return (
    <Fragment>
      <div className="portal">
        <form action="https://www.livroreclamacoes.pt/INICIO/">
          <button className="btn btn-reverse" type="submit" target="_blank">
            Livro de Reclamações
          </button>
        </form>
        <form action="https://www.w3docs.com/">
          <button className="btn btn-reverse" type="submit">
            Portal do cidadão
          </button>
        </form>
        <form action="https://www.consumidor.gov.pt/">
          <button className="btn btn-reverse" type="submit">
            Portal do Consumidor
          </button>
        </form>
      </div>
    </Fragment>
  );
};

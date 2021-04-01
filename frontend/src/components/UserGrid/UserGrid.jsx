import React from "react";

import "./grid.css";
import UserRow from "./UserRow";

function UserGrid({ data, term }) {
  if (term !== "") {
    data = data.filter((u) => {
      return u.nome.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });
  }

  function renderData() {
    if (data.length === 0) return <span>Nenhum usuário encontrado.</span>;
    else
      return (
        <React.Fragment>
          <div className="grid-header">
            <span className="user-id">ID</span>
            <span className="user-name">Nome</span>
            <span className="user-email">E-mail</span>
            <span className="user-cpf">CPF</span>
            <span className="user-data">Data de Nascimento</span>
          </div>

          {data.map((u, i) => (
            <UserRow key={i} user={u} />
          ))}
        </React.Fragment>
      );
  }

  return <div id="user-grid">{renderData()}</div>;
}

export default UserGrid;

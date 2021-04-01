import React from "react";

import "./grid.css";
import UserRow from "./UserRow";

function UserGrid({ data }) {
  data = data.sort(function (a, b) {
    if (a.nome < b.nome) return -1;

    if (a.nome > b.nome) return 1;

    return 0;
  });

  return (
    <div id="user-grid">
      <div className="grid-header">
        <span className="user-name">Nome</span>
        <span className="user-email">E-mail</span>
        <span className="user-cpf">CPF</span>
        <span className="user-data">Data de Nascimento</span>
      </div>

      {data.map((u, i) => (
        <UserRow key={i} user={u} />
      ))}
    </div>
  );
}

export default UserGrid;

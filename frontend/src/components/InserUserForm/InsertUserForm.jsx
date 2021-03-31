import React from "react";

import "./style.css";

function InsertUserForm() {
  return (
    <div id="form-container">
      <div className="form-control">
        <label htmlFor="input-name">Nome</label>
        <input id="input-name" type="text" placeholder="Nome" />
      </div>
      <div className="form-control">
        <label htmlFor="input-email">E-mail</label>
        <input id="input-email" type="text" placeholder="user@server.com" />
      </div>
      <div className="form-control">
        <label htmlFor="input-cpf">CPF</label>
        <input id="input-cpf" type="text" placeholder="123.456.789-00" />
      </div>
      <div className="form-control">
        <label htmlFor="input-date">Data de nascimento</label>
        <input id="input-date" type="date" />
      </div>
      <button className="btn">Cadastrar</button>
    </div>
  );
}
export default InsertUserForm;

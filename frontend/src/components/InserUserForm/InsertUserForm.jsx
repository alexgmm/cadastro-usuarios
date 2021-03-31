import React, { useState } from "react";

import Input from "./Input";

import "./style.css";

function InsertUserForm({ handleSubmit, handleChange }) {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [date, setDate] = useState(null);

  return (
    <div id="form-container">
      <Input label="Nome" type="text" placeholder="Nome" setValue={setNome} />
      <Input
        label="Email"
        type="text"
        placeholder="user@server.com"
        setValue={setEmail}
      />
      <Input
        label="CPF"
        type="text"
        placeholder="123.456.789-00"
        setValue={setCpf}
      />
      <Input label="Data de nascimento" type="date" setValue={setDate} />
      <button className="btn" onClick={handleSubmit}>
        Cadastrar
      </button>
    </div>
  );
}

export default InsertUserForm;

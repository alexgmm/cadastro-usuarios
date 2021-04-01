import React, { useState } from "react";
import validateUser from "../../validation/userValidation";

import Input from "./Input";
import "./style.css";

function InsertUserForm({ submit }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [data, setData] = useState(null);

  const [nomeError, setNomeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [dataError, setDataError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const user = { nome, email, cpf, data };

    const result = await validateUser(user);

    setNomeError(result.nome || "");
    setEmailError(result.email || "");
    setCpfError(result.cpf || "");
    setDataError(result.data || "");

    if (Object.keys(result).length === 0) submit(user);
  }

  return (
    <div id="form-container">
      <Input
        label="Nome"
        type="text"
        placeholder="Nome"
        errorMessage={nomeError}
        setValue={setNome}
      />
      <Input
        label="Email"
        type="text"
        placeholder="user@server.com"
        errorMessage={emailError}
        setValue={setEmail}
      />
      <Input
        label="CPF"
        type="text"
        placeholder="123.456.789-00"
        errorMessage={cpfError}
        setValue={setCpf}
      />
      <Input
        label="Data de nascimento"
        type="date"
        errorMessage={dataError}
        setValue={setData}
      />
      <button type="submit" className="btn" onClick={handleSubmit}>
        Cadastrar
      </button>
    </div>
  );
}

export default InsertUserForm;

import React from "react";

function UserRow({ user }) {
  const { id, nome, email, cpf, data } = user;
  return (
    <div className="grid-row">
      <span className="user-id">{id}</span>
      <span className="user-name">{nome}</span>
      <span className="user-email">
        <a href={`mailto:${email}`}>{email}</a>
      </span>
      <span className="user-cpf">{cpf}</span>
      <span className="user-data">{data}</span>
    </div>
  );
}

export default UserRow;

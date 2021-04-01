import React from "react";
import InsertUserForm from "../../components/InserUserForm/InsertUserForm";

function InsertUser() {
  function submit(e) {}
  return (
    <div className="container">
      <InsertUserForm submit={submit} />
    </div>
  );
}

export default InsertUser;

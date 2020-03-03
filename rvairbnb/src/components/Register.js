import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h1>Register:</h1>
      <Link to="/landOwnerRegister">I own Land</Link>
      <br></br>
      <br></br>
      <Link to="/renterRegister">I own an RV</Link>
    </div>
  );
}

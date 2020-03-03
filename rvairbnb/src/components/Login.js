import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Login:</h1>
      <div>
        

        <Link to="/landOwnerLogin">I own Land</Link>
        <br></br>
        <br></br>
        <Link to="/rvOwnerLogin">I own an RV</Link>
      </div>
    </div>
  );
}

import React from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <nav>
        <NavLink className="homeNavLink" to='/'>
          Home
        </NavLink>

      <NavLink className="homeNavLink" to="/register">
          Register
        </NavLink>
        <NavLink className="homeNavLink" to="/login">
          Login
        </NavLink>
      </nav>

      <div>
<div className="container">

        <h1>Login:</h1>
        <Link to="/landOwnerLogin">I own Land</Link>
        <br></br>
        <br></br>
        <Link to="/rvOwnerLogin">I own an RV</Link>
      </div>
    </div>
    </div>

  );
}

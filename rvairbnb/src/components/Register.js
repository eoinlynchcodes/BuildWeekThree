import React from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";

export default function Register() {
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
      <div className="container">
      <h1>Register:</h1>
      <Link to="/landOwnerRegister">I own Land</Link>
      <br></br>
      <br></br>
      <Link to="/rvOwnerRegister">I own an RV</Link>
    </div>
    </div>

  );
}

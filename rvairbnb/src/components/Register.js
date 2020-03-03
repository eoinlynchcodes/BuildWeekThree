import React from "react";
import "../index.css";
import { Link, Route } from "react-router-dom";
import LandOwnerRegister from "./LandOwnerRegister";
import { RenterRegister } from "./RenterRegister";

export default function Register() {
  return (
    <div>
      <h1>Register:</h1>
      <Route path="/landOwnerRegister" component={LandOwnerRegister} />
      <Route path="/renterRegister" component={RenterRegister} />

      <Link to="/landOwnerRegister">I own Land</Link>
      <br></br>
      <br></br>
      <Link to="/renterRegister">I own an RV</Link>
    </div>
  );
}

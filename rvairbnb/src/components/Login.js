import React from "react";
import "../index.css";
import { Route, Link } from "react-router-dom";
import RenterLogin from './RenterLogin';
import LandOwnerLogin from './LandOwnerLogin';

export default function Login() {
  return (
    <div>
      <h1>Login:</h1>
      <div>
        <Route path="/landOwnerLogin" component={LandOwnerLogin} />
        <Route path="/renterLogin" component={RenterLogin} />

        <Link to="/landOwnerLogin">I own Land</Link>
        <br></br>
        <br></br>
        <Link to="/renterLogin">I own an RV</Link>
      </div>
    </div>
  );
}

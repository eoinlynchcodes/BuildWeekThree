import React from "react";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";
import HomePage from "./components/HomePage";
import LandOwnerLogin from './components/LandOwnerLogin';
import RenterLogin from './components/RenterLogin';
import LandOwnerRegister from "./components/LandOwnerRegister";
import { RenterRegister } from "./components/RenterRegister";

function App() {
  return (
    <div>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/landOwnerLogin" component={LandOwnerLogin} />
      <Route exact path="/renterLogin" component={RenterLogin} />
      <Route exact path="/landOwnerRegister" component={LandOwnerRegister}/>
      <Route exact path="/renterRegister" component={RenterRegister}/>
    </div>
  );
}

export default App;

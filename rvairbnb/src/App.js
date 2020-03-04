import React from "react";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";
import HomePage from "./components/HomePage";
import LandOwnerLogin from './components/LandOwnerLogin';
import RVOwnerLogin from './components/RVOwnerLogin';
import LandOwnerRegister from "./components/LandOwnerRegister";
import RVOwnerRegister from "./components/RVOwnerRegister";
import landOwnerDashboard from './components/LandOwnerDashboard';
import Listings from './components/Listings';

function App() {
  return (
    <div>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/landOwnerLogin" component={LandOwnerLogin} />
      <Route exact path="/rvOwnerLogin" component={RVOwnerLogin} />
      <Route exact path="/landOwnerRegister" component={LandOwnerRegister}/>
      <Route exact path="/rvOwnerRegister" component={RVOwnerRegister}/>
      <Route exact path="/landOwnerDashboard" component={landOwnerDashboard} />
      <Route exact path="/seeAllListings" component={Listings}/>
   </div>
  );
}

export default App;

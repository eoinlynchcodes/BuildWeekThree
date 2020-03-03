import React from "react";
import { Route, NavLink } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import homepageImage from "./images/homepageImage";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      {/* <nav>
        <NavLink class="homeNavLink" to="/register">Register</NavLink>
        <NavLink class="homeNavLink" to="/login">Login</NavLink>
      </nav>
      <img src={homepageImage} /> */}

      {/* <Route exact path="/"/> */}
      <Route path='/home' component={HomePage}/>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;

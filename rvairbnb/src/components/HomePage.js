import React from "react";
import Login from "./Login";
import Register from "./Register";
import { NavLink } from "react-router-dom";
import homepageImage from "../images/homepageImage";

export default function HomePage() {
  return (
    <div>
      <nav>
        <NavLink class="homeNavLink" to="/register">
          Register
        </NavLink>
        <NavLink class="homeNavLink" to="/login">
          Login
        </NavLink>

      </nav>
      <img src={homepageImage} />
    </div>
  );
}

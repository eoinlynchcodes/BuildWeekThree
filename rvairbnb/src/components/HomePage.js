import React from "react";
import { NavLink } from "react-router-dom";
import homepageImage from "../images/homepageImage";

export default function HomePage() {
  return (
    <div>
      <nav>
        <NavLink className="homeNavLink" to="/register">
          Register
        </NavLink>
        <NavLink className="homeNavLink" to="/login">
          Login
        </NavLink>
      </nav>
      <img src={homepageImage} alt='homePageImage'/>
    </div>
  );
}

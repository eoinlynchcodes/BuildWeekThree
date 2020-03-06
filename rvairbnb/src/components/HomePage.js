import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import homepageImage from "../images/homepageImage";

export default function HomePage() {
  return (
    <div>
      <h1>RV-Airbnb</h1>
      <nav>
        <NavLink className="homeNavLink" to="/register">
          Register
        </NavLink>
        <NavLink className="homeNavLink" to="/login">
          Login
        </NavLink>
      </nav>
      <img src={homepageImage} alt="homePageImage" />

      <article>
        <h1><u>RV-Airbnb</u></h1>
        <p>RV-Airbnb let's you park, camp and experience a world that is out there waiting for you.</p>
        
        <div>
          <h3>How it Works for RV owners:</h3>
        <ul>
          <li>Create your RV-Airbnb account</li>
          <li>Search and find the right location to park up and experience the world from</li>
          <li>Schedule and pay using RV-Airbnb</li>
          <li>Enjoy your time in a previously out of reach place</li>
        </ul>
        </div>

        <div>
          <h3>How it Works for Land Owners:</h3>
          <ul>
          <li>Create your RV-Airbnb account</li>
          <li>Create your listing</li>
          <li>Receive Bookings</li>
          <li>Host Guests</li>
          <li>Get paid</li>
          </ul>
        </div>

        <p>What are you waiting for? Sign up or loose out!</p>

      </article>


      <footer>
        <h2>&copy; RV-Airbnb 2020</h2>
      </footer>
    </div>
  );
}

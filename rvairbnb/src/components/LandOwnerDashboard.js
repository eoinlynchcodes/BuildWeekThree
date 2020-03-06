import React from "react";
import AddListingForm from './AddListingForm';
import { NavLink } from "react-router-dom";

export default function LandOwnerDashboard() {
  return (
    <div>
      <nav>
      </nav>
      <h1>Land Owner Dashboard</h1>

      <AddListingForm/>
    </div>
  );
}

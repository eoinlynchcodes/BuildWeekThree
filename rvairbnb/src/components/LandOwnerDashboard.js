import React from "react";
import AddListingForm from './AddListingForm';
import Listings from './Listings';
import { CardForListItem } from './CardForListItem';

export default function LandOwnerDashboard() {
  return (
    <div>
      <h1>Land Owner Dashboard</h1>
      <AddListingForm/>
    </div>
  );
}

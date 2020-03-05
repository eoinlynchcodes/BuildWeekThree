import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../stateManagement/actionCreators";
import { Route } from "react-router-dom";
import Listings from './Listings';
import { listingsReducer } from "../stateManagement/reducers";

function EditForm({ listingsReducerData, getListings }) {

  const baseAPI = "https://rvairbnb.herokuapp.com";
  const { listingID } = useParams({});

  console.log(listingID);

  useEffect(() => {
    getListings();
  }, []);
  
  console.log(listingsReducerData);

  const data = listingsReducerData.find(item => item.id === Number(listingID));
  console.log(data);

  return( 
  <div>
{      console.log(data)
}

<form> Edit this listing. 
  <label>Location:</label>
  <input 
  placeholder="Location"
  name="location"
  // value={data.location}
  />

<label>Description:</label>
<input 
placeholder="Description"
name="description"
/>

<label>Price Per Day:</label>
<input 
placeholder="Price Per Day"
name="price_per_day"
/>

<label>Photo</label>
<input 
placeholder="Photo:"
name="photo"
/>

</form>
  </div>
  );
}

function mapStateToProps(state) {
  return {
    listingsReducerData: state.listingsReducerData.listings
  };
}

export default connect(mapStateToProps, actionCreators)(EditForm);

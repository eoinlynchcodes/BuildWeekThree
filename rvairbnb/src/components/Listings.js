import React, { useEffect, useState } from "react";
import axios from "axios";
import withAuth from "../axiosWithAuth";
import { CardForListItem } from "./CardForListItem";
import { connect } from "react-redux";
import * as actionCreators from '../stateManagement/actionCreators';

function Listings({ loLoginFormValues, listingsReducerData, getListings }) {
  console.log(listingsReducerData);

  const baseAPI = "https://rvairbnb.herokuapp.com";
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    getListings();

  }, []);



  const filteredListings = listingsReducerData.filter(
    item => item.owner_id === Number(id)
  );
  console.log(listingsReducerData);
  return (
    <div>
      {filteredListings.map((item, key) => {
        return <CardForListItem item={item} key={key} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loLoginFormValues: state.loLoginFormValues,
    listingsReducerData: state.listingsReducerData.listings
  };
}

export default connect(mapStateToProps, 
  actionCreators)(Listings);

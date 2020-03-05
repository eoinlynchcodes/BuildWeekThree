import React, { useEffect } from "react";
import { CardForListItem } from "./CardForListItem";
import { connect } from "react-redux";
import * as actionCreators from '../stateManagement/actionCreators';

function Listings({ loLoginFormValues, listingsReducerData, getListings }) {

  const id = localStorage.getItem("user_id");

  useEffect(() => {
    getListings();
  }, [getListings]);

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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../stateManagement/actionCreators";
import { listingsReducer } from "../stateManagement/reducers";
import { useHistory } from "react-router-dom";

function EditForm({ listingsReducerData, getListings, editForm }) {
  const baseAPI = "https://rvairbnb.herokuapp.com";
  const { listingID } = useParams();
  const history = useHistory();
  const editedData =
    listingsReducerData.length > 0 &&
    listingsReducerData.find(item => item.id === Number(listingID));

  const [data, setData] = useState({
    location: editedData.location,
    description: editedData.description,
    price_per_day: editedData.price_per_day,
    photo: editedData.photo
  });

  useEffect(() => {
    getListings();
  }, []);

  const onSubmit = event => {
    console.log(data);
    event.preventDefault();
    editForm(listingID, data);
    history.push("/seeAllListings");
  };

  const onChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      {data && (
        <div>
          <form onSubmit={onSubmit}>
            Edit this listing
            <label>Location:</label>
            <input
              placeholder="Location"
              name="location"
              onChange={event => onChange(event)}
              value={data.location}
            />
            <label>Description:</label>
            <input
              placeholder="Description"
              name="description"
              onChange={event => onChange(event)}
              value={data.description}
            />
            <label>Price Per Day:</label>
            <input
              placeholder="Price Per Day"
              name="price_per_day"
              onChange={event => onChange(event)}
              value={data.price_per_day}
            />
            <label>Photo</label>
            <input
              placeholder="Photo:"
              name="photo"
              onChange={event => onChange(event)}
              value={data.photo}
            />
            <button>Save These Details</button>
          </form>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    listingsReducerData: state.listingsReducerData.listings
  };
}

export default connect(mapStateToProps, actionCreators)(EditForm);

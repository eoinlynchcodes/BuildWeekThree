import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreators from '../stateManagement/actionCreators';

function EditForm({
  listingsReducerData,
  getListings,
}) {

    const { listingID } = useParams();
 
    console.log(listingID);


    useEffect(() => {
      getListings();
    }, [])

    

const [ inputs, setInputs ] = useState()

  return (
    <div>
      {/* <form>
        Form to Edit data.
        <label>Location</label>
        <input
          placeholder="Location"
          name="location"
        //   onChange={onChange}
          // value={dataForCard.location}
        />
        <label>Description:</label>
        <input
          placeholder="Description:"
          name="description"
          onChange={onChange}
          // value={dataForCard.description}
        />
        <label>Price:</label>
        <input
          placeholder="Price:"
          name="price_per_day"
          onChange={onChange}
          // value={dataForCard.price_per_day}
        />
        <Button onClick={editThis}>Edit</Button>
      </form> */}
    </div>
  );
}


function mapStateToProps(state){
  return{
    listingsReducerData: state.listingsReducerData.listings
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(EditForm);
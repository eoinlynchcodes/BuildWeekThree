import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';
import withAuth from "../axiosWithAuth";
import * as actionCreators from '../stateManagement/actionCreators';

const CardForListItem = (props ) => {

  const deleteListing = props.deleteListing;
  console.log(props);

  const baseAPI = "https://rvairbnb.herokuapp.com";
  const history = useHistory();
  const dataForCard = props.item;
  const Card = styled.div`
    border: 1px solid black;
    border-radius: 12px;
    margin: 0 auto;
  `;

  const Button = styled.button`
    border: 1px solid red;
  `;

  const [editData, setEditData] = useState({
    location: "",
    description: "",
    price_per_day: "",
    photo: ""
  });





  return (
    <div>
         <nav>
      <NavLink className="homeNavLink" to='/'>
          Home
        </NavLink>

      <NavLink className="homeNavLink" to="/landOwnerDashboard">
          Add Another Listing
        </NavLink>
        <NavLink className="homeNavLink" to="/logout">
          Logout
        </NavLink>
      </nav>
      <Card>
        <h1>{dataForCard.location}</h1>
        <h1>{dataForCard.description}</h1>
        <h1>{dataForCard.price_per_day}</h1>
        <Button onClick={() => deleteListing(dataForCard.id)}>Delete</Button>
        <Button onClick={() => history.push(`/editForm/${dataForCard.id}`)}>Edit</Button>
      </Card>
    </div>
  );
};

export default connect(
  null,
  actionCreators,
  // props
)(CardForListItem);

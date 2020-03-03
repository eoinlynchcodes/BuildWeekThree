import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../stateManagement/actionCreators';

function LandOwnerRegister({
  postLandOwnerAccount,
  changeInput,
  loRegFormValues
  }) {

  const onSubmit = event => {
    event.preventDefault();
    postLandOwnerAccount({
      username: 'eoinlynch',
      // loRegFormValues.username,
      password: 'password' ,
      // loRegFormValues.password,
      is_land_owner: true
    });
  }

  const onChange = event => {
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Land Owner Register</h1>
        <label>Username:</label>
        <input 
        placeholder="Username:" 
        name="username"        
        type="text"
        value={loRegFormValues.username}
        onChange={event => onChange(event)}
        />

        <label>Password:</label>
        <input 
        placeholder="Password:" 
        name="password" 
        type="text"
        value={loRegFormValues.password}
        onChange={event => onChange(event)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

function mapStateToProps(state){
  console.log(state);
  return {
    loRegFormValues: state.loRegFormValues
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(LandOwnerRegister);
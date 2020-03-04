import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../stateManagement/actionCreators';
import { useHistory } from 'react-router-dom';

function LandOwnerLogin({
loLoginFormValues,
changeInput, 
postLandOwnerLogin
}) {

  const history = useHistory();
  const onSubmit = event => {
    event.preventDefault();
    postLandOwnerLogin({
      username: loLoginFormValues.username,
      password: loLoginFormValues.password,
    })
    .then(response => {
      console.log(response);
      history.push('/landOwnerDashboard');
    })
    .catch(error => {
      console.log(error);
      history.push('/home');
    })
  }

  const onChange = event => {
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value
    });
    console.log(loLoginFormValues.username);
    console.log(loLoginFormValues.password);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Land Owner Login:</h1>
        <label>Username:</label>
        <input 
        placeholder="Username:" 
        name="username" 
        type="text"
        value={loLoginFormValues.username}
        onChange={event => onChange(event)}
        />

        <label>Password:</label>
        <input 
        placeholder="Password:" 
        name="password" 
        type="text"
        value={loLoginFormValues.password}
        onChange={event => onChange(event)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function mapStateToProps(state){
  return {
    loLoginFormValues: state.loLoginFormValues
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(LandOwnerLogin);
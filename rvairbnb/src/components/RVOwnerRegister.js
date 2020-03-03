import React from "react";
import { connect } from "react-redux";
import * as actionCreators from '../stateManagement/actionCreators';


function RVOwnerRegister(
  changeInput,
  postRVOwnerAccount,
  rvOwnerRegFormValues
  ){

    const onChange = event => {
      changeInput({
        inputName: event.target.value,
        inputValue: event.target.value
      });
    }

    const onSubmit = event => {
      event.preventDefault();
      postRVOwnerAccount({
        username: rvOwnerRegFormValues.username,
        password: rvOwnerRegFormValues.password
      })
    }


  return (
    <div>
      <form onSubmit={onSubmit}>
        Renter Register:
        <label>Username:</label>
        <input 
        placeholder="Username:" 
        name="username" 
        type="text"
        value={rvOwnerRegFormValues.username}
        onChange={onChange}
        />

        <label>Password:</label>
        <input 
        placeholder="Password:" 
        name="password" 
        type="text"
        value={rvOwnerRegFormValues.password}
        onChange={onChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

function mapStateToProps(state){
  return{
    rvOwnerRegFormValues: state.rvOwnerRegFormValues
  }
}

export default connect(
  mapStateToProps,
  actionCreators) (RVOwnerRegister);
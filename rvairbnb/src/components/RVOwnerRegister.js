import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function RVOwnerRegister(){

  const [ rvOwnerData, setRVOwnerData ] = useState({
    username: '',
    password: '',
    is_land_owner: false
  });

  const history = useHistory();
    const baseAPI = 'https://rvairbnb.herokuapp.com';
    const onChange = event => {
      setRVOwnerData({
        ...rvOwnerData,
        [event.target.name]: event.target.value
      });
    };

    const onSubmit = event => {
      event.preventDefault();
      axios.post(`${baseAPI}/api/auth/register`)
      .then(response => {
        console.log(response.data);
        setRVOwnerData(response.data);
        history.push('/rvOwnerDashboard');
      })
      .catch(error => {
        console.log(error);
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
        value={rvOwnerData.username}
        onChange={onChange}
        />

        <label>Password:</label>
        <input 
        placeholder="Password:" 
        name="password" 
        type="text"
        value={rvOwnerData.password}
        onChange={onChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
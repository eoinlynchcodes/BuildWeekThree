import React, { useState } from "react";

export const RenterRegister = () => {

const [ renterRegister, setRenterRegister ] = useState({
    ownerUsername: '',
    ownerPassword: '',
 })

 const onChange = event => {
     setRenterRegister({
         ...renterRegister,
         [event.target.name]: event.target.value
     });
 };

 const handleSubmit = event => {
     event.preventDefault();
 }


  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        Renter Register:
        <label>Username:</label>
        <input 
        placeholder="Username:" 
        name="ownerUsername" 
        type="text"
        onChange={event => onChange(event)}
        />

        <label>Password:</label>
        <input 
        placeholder="Password:" 
        name="ownerPassword" 
        type="text"
        onChange={event => onChange(event)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

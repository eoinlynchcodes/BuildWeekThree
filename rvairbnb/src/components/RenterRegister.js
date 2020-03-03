import React from 'react';

export default function RenterRegister(){

    return(
        <div>
        <form>
          Renter Register:
          <label>Username:</label>
          <input 
          placeholder="Username:" 
          name="ownerUsername"        
          type="text"/>
  
          <label>Password:</label>
          <input 
          placeholder="Password:" 
          name="ownerPassword" 
          type="text"/>
          <button type="submit">Register</button>
        </form>
      </div>
    )
}
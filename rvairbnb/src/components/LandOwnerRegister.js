import React from "react";

export default function LandOwnerRegister() {


  return (
    <div>
      <form>
        Land Owner Registration:
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
  );
}

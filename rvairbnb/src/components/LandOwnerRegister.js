import React from "react";

export const LandOwnerRegister = () => {
    
  return (
    <form>
      Land Owner Registration:
      <label>Username:</label>
      <input placeholder="Username:" name="ownerUsername" type="text" />
      <label>Password:</label>
      <input placeholder="Password:" name="ownerPassword" type="text" />
      <button type="submit">Register</button>
    </form>
  );
}

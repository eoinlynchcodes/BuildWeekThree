import React from "react";


export default function RVOwnerLogin() {
  return (
      <form>
        <h1>Renter Login</h1>
        <label>Username:</label>
        <input 
        placeholder="Username:" name="renterUsername" type="text" />
        <label>Password:</label>
        <input placeholder="Password:" name="renterPassword" type="text" />
        <button type="submit">Login</button>
      </form>
  );
}

import React from "react";


export default function RenterLogin() {
  return (
    <div className="formsSideBySide">
      <form>
        Land Owner Login:
        <label>Username:</label>
        <input placeholder="Username:" name="ownerUsername" type="text" />
        <label>Password:</label>
        <input placeholder="Password:" name="ownerPassword" type="text" />
        <button type="submit">Login</button>
      </form>

      <form>
        Renter Login
        <label>Username:</label>
        <input placeholder="Username:" name="renterUsername" type="text" />
        <label>Password:</label>
        <input placeholder="Password:" name="renterPassword" type="text" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

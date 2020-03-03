import React from "react";

export default function LandOwnerLogin() {
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
    </div>
  );
}

import React from "react";
import "../index.css";

export default function Register() {
  return (
    <div>
      <h1>Registration:</h1>
      <div class="formsSideBySide">
        <form>
          Land Owner Registration:
          <label>Username:</label>
          <input placeholder="Username:" name="ownerUsername" type="text" />
          <label>Password:</label>
          <input placeholder="Password:" name="ownerPassword" type="text" />
          <button type="submit">Register</button>
        </form>

        <form>
            Renter Registration
          <label>Username:</label>
          <input placeholder="Username:" name="renterUsername" type="text" />

          <label>Password:</label>
          <input placeholder="Password:" name="renterPassword" type="text" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

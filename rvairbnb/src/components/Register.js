import React from "react";
import "../index.css";
import { Link, Route } from 'react-router-dom';
import { LandOwnerRegister } from './LandOwnerRegister';

export default function Register() {
  return (
    <div>
      <h1>Register:</h1>

<Route path='/landownerregister' component={LandOwnerRegister} />

<Link to='/landownerregister'>I own Land</Link>
<br></br><br></br>
<Link to='/'>I want to rent a space for my RV</Link>

      {/* <div class="formsSideBySide">
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
      </div> */}
    </div>
  );
}

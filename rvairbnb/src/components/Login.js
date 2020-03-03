import React from 'react';
import '../index.css';

export default function Login(){
    return (
        <div>
        <h1>Login:</h1>
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
      </div>
    );
}
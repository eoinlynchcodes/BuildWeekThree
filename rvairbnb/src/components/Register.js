import React from 'react';

export default function Register() {

    return (
        <div>
            <h1>Registration:</h1>
            <form> Land Owner Registration:
                <label>Username:</label>
                <input 
                placeholder="Username:"
                name="ownerUsername"
                type="text"
                />

                <label>Password:</label>
                <input 
                placeholder="Password:"
                name="ownerPassword"
                type="text"
                />
                <button type="submit">Register</button>
            </form>

            <form>
                <label>Username:</label>
                <input 
                placeholder="Username:"
                name="renterUsername"
                type="text"
                />

                <label>Password:</label>
                <input 
                placeholder="Password:"
                name="renterPassword"
                type="text"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

